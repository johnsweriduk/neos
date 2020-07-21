import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import {
    TextureLoader
} from 'three';



const SkyboxLoading = props => {
    const mesh = useRef()
    // Set up state for the hovered and active state


    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[75, 75, 75]}>
            <sphereBufferGeometry attach="geometry" args={[1, 128, 128]} />
            <meshStandardMaterial attach="material" color={'orange'} />
        </mesh>
    );
}

export default SkyboxLoading;