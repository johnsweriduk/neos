import React, { useMemo } from 'react';
import { HTML } from "drei";


const PlanetData = props => {
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