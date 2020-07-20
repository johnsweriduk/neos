import React, { Component, Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import Planet from './planets/Planet.js';
import PlanetLoading from './planets/PlanetLoading.js';
import PlanetOrbit from './planets/PlanetOrbit.js';
import Skybox from './skybox/Skybox.js';
import axios from 'axios';
import SkyboxLoading from './skybox/SkyboxLoading.js';
import CameraControls from './camera/CameraControls.js';
import * as THREE from 'three';



class Space extends Component {
    state = {
        planets: []
    }

    componentDidMount = () => {
        axios.get('/api/planets')
            .then(res => {
                console.log(res.data);
                this.setState({
                    planets: res.data
                });
            });
    }

    render = () => {
        return (
            <Canvas camera={{ fov: 75, position: [0, 10, 10] }} colorManagement style={{ height: '100vh', width: '100vw' }}>
                <axesHelper size={15} />
                <CameraControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<SkyboxLoading position={[0, 0, 0]}/>}>
                    <Skybox position={[0, 0, 0]}/>
                </Suspense>
                { this.drawPlanets() }
            </Canvas>
        );
    }

    drawPlanets = () => {
        return this.state.planets.map(planet => {
            if (planet.name === 'sun') {
                return (

                    <Suspense key={planet.name} fallback={<PlanetLoading name={planet.name} scale={planet.scale} key={planet.name} position={[planet.x, planet.y, planet.z]} />}>
                        <Planet name={planet.name} scale={planet.scale} key={planet.name} position={[planet.x, planet.y, planet.z]} />
                    </Suspense>
                )
            } else {
                return (

                    <Suspense key={planet.name} fallback={<PlanetLoading name={planet.name} scale={planet.scale} key={planet.name} position={[planet.x, planet.y, planet.z]} />}>
                        <Planet name={planet.name} scale={planet.scale} key={planet.name} position={[planet.x, planet.y, planet.z]} />
                        <PlanetOrbit
                            position={[planet.position.x, planet.position.y, planet.position.z]}
                            loa={[0, 0, planet.rotation.loa]}
                            per={[0, 0, planet.rotation.per]}
                            inc={[planet.rotation.inc, 0, 0]}
                            axes={planet.axes} />
                    </Suspense>
                )
            }
        })
    }
}


export default Space;