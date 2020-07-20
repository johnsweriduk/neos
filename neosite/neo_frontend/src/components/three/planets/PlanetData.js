import React, { useMemo } from 'react';
import { Dom } from "react-three-fiber";
import * as THREE from 'three';
import { HTML } from "drei";


const PlanetData = props => {
    const geometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(0, 0, 1, 1, 0, 1.5 * Math.PI, false, 0)
        const points = curve.getPoints(32)
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [])
    let scaleFactor = 2;
    if (props.name == 'jupiter' || props.name == 'saturn' || props.name == 'uranus') {
        scaleFactor = 12;
    }
    return (
        <group position={props.position}>
            <HTML scaleFactor={scaleFactor}>
                <div className="name">
                    {props.name}
                    <div className="indicator">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                    </div>
                </div>
            </HTML>
        </group>
    )
}

export default PlanetData;