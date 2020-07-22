import React, { Component, Suspense } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
                    <SimpleBar style={{ maxHeight: '100%' }}>
                        {this.drawNeoNav()}
                    </SimpleBar>
                </div>
                <div className="planet-navigation">
                    <div className="title">
                        Planets
                    </div>
                    <SimpleBar style={{ maxHeight: '100%' }}>
                        {this.drawPlanetNav()}
                    </SimpleBar>
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