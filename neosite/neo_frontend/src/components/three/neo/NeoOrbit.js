import React, { useMemo } from 'react';
import * as THREE from 'three';



const NeoOrbit = props => {
    let points = 512;
    if (props.name == '(A/2019 U6)') {
        points = 1024;
    }
    const geometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(0, 0, props.axes[0], props.axes[1], 0, 2 * Math.PI, false, 0)
        const points = curve.getPoints(1024)
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [])

    return (
        <group rotation={props.loa} position={props.position2}>
            <group rotation={props.inc}>
                <group rotation={props.per}>
                    <line geometry={geometry} position={props.position}>
                        <lineBasicMaterial attach="material" color="red" />
                    </line>
                </group>
            </group>
        </group>
    )
}

export default NeoOrbit;