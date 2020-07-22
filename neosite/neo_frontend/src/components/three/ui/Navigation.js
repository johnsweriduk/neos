import React, { Component, Suspense } from 'react';


class Navigation extends Component {
    state = {
        hasVoted: false
    }
    render = () => {
        return (
            <div className="navigation">
                <div className="neo-navigation">
                    <div className="title">
                        Near-Earth Objects
                    </div>
                    { this.drawNeoNav() }
                </div>
                <div className="planet-navigation">
                    <div className="title">
                        Planets
                    </div>
                    { this.drawPlanetNav() }
                </div>
            </div>
        );
    }

    drawNeoNav = () => {
        return this.props.neos.map((neo, index) => {
            return (<div key={index} className="neo nav-item">
                <div className="label">
                    <p>{neo.name}</p>
                    <button
                        onClick={() => { this.props.moveCameraToNeo(index) }}>
                        GO
                    </button>
                    {!this.state.hasVoted && (<button
                        onClick={() => {
                            this.props.voteForNeo(index)
                            console.log('test');
                            this.setState({
                                hasVoted: true
                            })
                        }}>
                        VOTE
                    </button>)}
                </div>
            </div>)
        });
    }
    drawPlanetNav = () => {
        return this.props.planets.map( (planet, index) => {
            return (<div key={index} className="planet nav-item">
                <div className="label">
                    <p>{planet.name}</p>
                    <button
                        onClick={() => { 
                            this.props.moveCameraToPlanet(index) }}>
                        GO
                    </button>
                </div>
            </div>)
        });
    }
}

export default Navigation;