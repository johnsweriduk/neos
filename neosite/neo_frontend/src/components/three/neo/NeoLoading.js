import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import {
    TextureLoader
} from 'three';



const NeoLoading = props => {
    const mesh = useRef()
    const scaleFactor = 23481.86 / 250;
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => (mesh.current.rotation.y += 0.001));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1, 1, 1] : [props.scale / scaleFactor, props.scale / scaleFactor, props.scale / scaleFactor]}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <sphereBufferGeometry attach="geometry" args={[1, 128, 128]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

export default NeoLoading;