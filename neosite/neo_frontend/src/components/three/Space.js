import React, { Component } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './test/Box.js';

class Space extends Component {
    render = () => {
        return (
            <Canvas colorManagement>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        );
    }
}


export default Space;