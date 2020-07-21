import React, { useRef, useState } from 'react';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import {
    TextureLoader
} from 'three';


const Planet = props => {
    const mesh = useRef()
    const scaleFactor = 23481.86 / 250;
    // Set up state for the hovered and active state
    let newPosition = [];
    let cameraAnimate = false;
    const texture = useLoader(TextureLoader, '/static/textures/' + props.name + '.jpg');
    const {
        camera
    } = useThree();
    camera.isAnimating = false;
    let distance = props.scale / 2
    if (props.name == 'sun') {
        distance = distance / 3;
    }
    useFrame(() => {
        mesh.current.rotation.y += 0.001;
        if (cameraAnimate) {
            const target = camera.controls.current.target;
            const targetExp = Math.abs(target.x - newPosition[0]) > 0.01 && Math.abs(target.y - newPosition[1]) > 0.01 && Math.abs(target.z - newPosition[2]) > 0.01;
            const locExp = Math.abs(camera.position.x - newPosition[0]) < distance && Math.abs(camera.position.y - newPosition[1]) < distance && Math.abs(camera.position.z - newPosition[2]) < distance;
            if (targetExp) {
                const x = target.x - (target.x - newPosition[0]) / 50;
                const y = target.y - (target.y - newPosition[1]) / 50;
                const z = target.z - (target.z - newPosition[2]) / 50;
                target.set(x, y, z);
            }
            if (!locExp) {
                camera.updateProjectionMatrix(void (
                    camera.position.z -= (camera.position.z - newPosition[2]) / 100,
                    camera.position.x -= (camera.position.x - newPosition[0]) / 100,
                    camera.position.y -= (camera.position.y - newPosition[1]) / 100
                ));
            }
            if (!targetExp && locExp) {
                camera.isAnimating = false;
                cameraAnimate = false;
                newPosition = [];
            }
        }
    });
    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={() => {
                if (!camera.isAnimating) {
                    console.log(props.position[2]);
                    newPosition = props.position;
                    camera.isAnimating = true;
                    console.log(camera.controls);
                    cameraAnimate = true;
                }
            }}
            scale={[props.scale / scaleFactor, props.scale / scaleFactor, props.scale / scaleFactor]}>
            <sphereBufferGeometry attach="geometry" args={[1, 128, 128]} />
            <meshStandardMaterial attach="material" map={texture} />
        </mesh>
    );
}

export default Planet;