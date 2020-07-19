import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';


function Box(props) {
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    let scale = 0.025;
    if (props.name === 'sun') {
        scale = 0.05;
    }
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [scale, scale, scale]}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

export default Box;