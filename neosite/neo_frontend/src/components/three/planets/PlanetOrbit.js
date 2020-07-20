import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import { Object3D } from 'three';



const PlanetOrbit = props => {
    const geometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(0, 0, props.axes['semi-major-axis'], props.axes['semi-minor-axis'], 0, 2 * Math.PI, false, 0)
        const points = curve.getPoints(512)
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [])
    console.log(props);
    return (
        <group rotation={props.loa} position={props.position2}>
            <group rotation={props.inc}>
                <group rotation={props.per}>
                    <line geometry={geometry} position={props.position}>
                        <lineBasicMaterial attach="material" color="green" />
                    </line>
                </group>
            </group>
        </group>
    )
}

export default PlanetOrbit;