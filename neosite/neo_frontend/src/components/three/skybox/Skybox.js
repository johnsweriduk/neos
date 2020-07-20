import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import {
    TextureLoader,
    Material
} from 'three';



const Skybox = props => {
    const mesh = useRef()
    // Set up state for the hovered and active state
    const texture = useLoader(TextureLoader, '/static/textures/skybox.jpg');
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[75,75,75]}>
            <sphereBufferGeometry attach="geometry" args={[1, 128, 128]} />
            <meshStandardMaterial attach="material" side={1} map={texture} />
        </mesh>
    );
}

export default Skybox;