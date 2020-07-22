import React, { Component, Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import Load from './ui/Load.js';
import Navigation from './ui/Navigation.js';
import Planet from './planets/Planet.js';
import PlanetLoading from './planets/PlanetLoading.js';
import PlanetOrbit from './planets/PlanetOrbit.js';
import PlanetData from './planets/PlanetData.js';
import Neo from './neo/Neo.js';
import NeoLoading from './neo/NeoLoading.js';
import NeoOrbit from './neo/NeoOrbit.js';
import NeoData from './neo/NeoData.js';
import Skybox from './skybox/Skybox.js';
import axios from 'axios';
import SkyboxLoading from './skybox/SkyboxLoading.js';
import CameraControls from './camera/CameraControls.js';



class Space extends Component {
    state = {
        planets: [],
        neos: [],
        loading: true
    }
    hide = () => {
        this.setState({
            loading: false
        })
    }
    componentDidMount = () => {
        let planets
        let neos
        axios.get('/api/planets')
            .then(res => {
                for (let planet of res.data) {
                    planet.moveTo = false;
                }
                planets = res.data
                axios.get('/api/neo')
                    .then(res => {
                        neos = res.data
                        for (let neo of res.data) {
                            neo.moveTo = false;
                        }
                        this.setState({
                            planets: planets,
                            neos: neos
                        });
                    });
            });
    }

    render = () => {
        return (
            <div>
                { this.state.loading && <Load hide={this.hide} /> }
                <Navigation
                    voteForNeo={this.voteForNeo}
                    moveCameraToNeo={this.moveCameraToNeo}
                    moveCameraToPlanet={this.moveCameraToPlanet}
                    planets={this.state.planets}
                    neos={this.state.neos} />
                <Canvas camera={{ fov: 75, position: [4, 4, 4] }} colorManagement style={{ height: '100vh', width: '80vw' }}>
                    <CameraControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={<SkyboxLoading position={[0, 0, 0]}/>}>
                        <Skybox position={[0, 0, 0]}/>
                    </Suspense>
                    { this.drawPlanets() }
                    { this.drawNeos() }
                </Canvas>
            </div>
        );
    }

    drawPlanets = () => {
        return this.state.planets.map(planet => {
            if (planet.name === 'sun') {
                return (
                    <Suspense
                        key={planet.name}
                        fallback={
                            <PlanetLoading
                                name={planet.name}
                                scale={planet.scale}
                                position={[planet.x, planet.y, planet.z]} />
                        }>
                        <Planet
                            moveTo={planet.moveTo}
                            name={planet.name}
                            scale={planet.scale}
                            position={[planet.x, planet.y, planet.z]} />
                    </Suspense>
                )
            } else {
                return (
                    <Suspense
                        key={planet.name}
                        fallback={
                            <PlanetLoading
                                name={planet.name}
                                scale={planet.scale}
                                position={[planet.x, planet.y, planet.z]} />
                        }>
                        <Planet
                            moveTo={planet.moveTo}
                            name={planet.name}
                            scale={planet.scale}
                            position={[planet.x, planet.y, planet.z]} />
                        <PlanetOrbit
                            name={planet.name}
                            position={[planet.position.x, planet.position.y, planet.position.z]}
                            position2={[planet.position2.x, planet.position2.y, planet.position2.z]}
                            loa={[0, 0, planet.rotation.loa]}
                            per={[0, 0, planet.rotation.per]}
                            inc={[planet.rotation.inc, 0, 0]}
                            axes={planet.axes} />
                        <PlanetData
                            name={planet.name}
                            scale={planet.scale}
                            position={[planet.x, planet.y, planet.z]} />
                    </Suspense>
                )
            }
        })
    }
    drawNeos = () => {
        return this.state.neos.map(neo => {
            const name = neo["name"];

            const e = neo["eccentricity"];
            const axis = neo["axis"];
            const minorAxis = axis * Math.sqrt(1 - e * e);
            const node = neo["node"] * Math.PI / 180;
            const inc = neo["inclination"] * Math.PI / 180;
            const peri = neo["perihelion_argument"] * Math.PI / 180;
            const distance = -1 * (axis - neo["perihelion_distance"]);

            const M = neo["mean_anomaly"] * Math.PI / 180;
            const E = M + e * Math.sin(M) * (1.0 + e * Math.cos(M))


            const i = inc;
            const w = peri;
            const N = node;
            const a = axis;

            const xv = a * (Math.cos(E) - e)
            const yv = a * (Math.sqrt(1.0 - e * e) * Math.sin(E))

            const v = Math.atan2(yv, xv)
            const r = Math.sqrt(xv * xv + yv * yv)

            const xh = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i))
            const yh = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i))
            const zh = r * (Math.sin(v + w) * Math.sin(i))

            const scale = neo["max_diameter"] / 5000;

            const minDiameter = neo["min_diameter"];
            const maxDiameter = neo["max_diameter"];
            
            return (
                <Suspense
                    key={name}
                    fallback={
                        <NeoLoading
                            name={name}
                            scale={scale}
                            position={[xh, yh, zh]} />
                    }>
                    <Neo
                        moveTo={neo.moveTo}
                        name={name}
                        scale={scale}
                        position={[xh, yh, zh]} />
                    <NeoOrbit
                        name={name}
                        position={[distance, 0, 0]}
                        position2={[0, 0, 0]}
                        loa={[0, 0, node]}
                        per={[0, 0, peri]}
                        inc={[inc, 0, 0]}
                        axes={[axis, minorAxis]} />
                    <NeoData
                        name={name}
                        scale={scale}
                        position={[xh, yh, zh]}
                        minDiameter={minDiameter}
                        maxDiameter={maxDiameter} />
                </Suspense>
            )
        })
    }

    moveCameraToNeo = index => {
        const newNeos = this.state.neos;
        for (let neo of newNeos) {
            neo.moveTo = false;
        }
        newNeos[index].moveTo = true;
        this.setState({
            neos: newNeos
        });
    }

    moveCameraToPlanet = index => {
        const newPlanets = this.state.planets;
        for (let planet of newPlanets) {
            planet.moveTo = false;
        }
        newPlanets[index].moveTo = true;
        console.log(newPlanets);
        this.setState({
            planets: newPlanets
        });
    }

    voteForNeo = index => {
        // perform a post request that will just increment the value in python and save the object
        axios.get('/api/neo/vote/' + index)
    }
}


export default Space;