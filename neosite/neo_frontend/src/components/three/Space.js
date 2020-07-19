import React, { Component } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './test/Box.js';
import axios from 'axios';

class Space extends Component {
    state = {
        planets: []
    }

    componentDidMount = () => {
        axios.get('/api/planets')
            .then(res => {
                this.setState({
                    planets: res.data
                });
            });
    }

    render = () => {
        return (
            <Canvas colorManagement style={{ height: '100vh', width: '100vw' }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                { this.drawPlanets() }
            </Canvas>
        );
    }

    drawPlanets = () => {
        return this.state.planets.map(planet => {
            console.log(planet);
            return <Box name={planet.name} key={planet.name} position={[planet.x / 10, planet.y / 10, planet.z / 10]} />
        })
    }
}


export default Space;