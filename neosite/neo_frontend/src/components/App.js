import ReactDom from 'react-dom';
import React, { Component } from 'react'
import Space from './three/Space.js';

class App extends Component {
    render = () => {
        return (
            <div>
                <h1>React App</h1>;
                <Space />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('main'));
