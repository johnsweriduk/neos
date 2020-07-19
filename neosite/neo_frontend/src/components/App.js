import ReactDom from 'react-dom';
import React, { Component } from 'react'
import Space from './three/Space.js';

class App extends Component {
    render = () => {
        return (
            <div>
                <Space />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('main'));
