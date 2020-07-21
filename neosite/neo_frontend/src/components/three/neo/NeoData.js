import React from 'react';
import { HTML } from "drei";


const NeoData = props => {
    let scaleFactor = 2;
    if (props.name == 'jupiter' || props.name == 'saturn' || props.name == 'uranus') {
        scaleFactor = 12;
    }
    return (
        <group position={props.position}>
            <HTML scaleFactor={scaleFactor}>
                <div className="name asteroid">
                    {props.name}
                    <div className="diameter">
                        Estimated diameter (meters):
                        <div className="min-diameter">
                            Min: {parseFloat(props.minDiameter).toFixed(2)}, Max: {parseFloat(props.maxDiameter).toFixed(2)}
                        </div>
                    </div>
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

export default NeoData;