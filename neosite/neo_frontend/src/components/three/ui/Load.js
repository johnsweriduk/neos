import React, { Component, Suspense } from 'react';


class Load extends Component {

    render = () => {
        return (
            <div className="loading">
                <div className="info">
                    <div className="title">
                        <h1>Astroidr</h1>
                    </div>
                    <div className="tagline">
                        <p>A match made in the heavens</p>
                    </div>
                    <div className="description">
                        <p>Earth is lonely and needs a friend. Help it choose from one of five near-earth objects in hopes that their paths align.</p>
                        <p>Instructions: You can navigate around using your mouse. Left click will pan the camera, right click will shift the camera, and scroll controls zoom. Clicking on a celestial body, or clicking on the menu will fly the camera to its position.</p>
                    </div>
                    <div className="cta">
                        <button onClick={this.props.hide}>Enter</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Load;