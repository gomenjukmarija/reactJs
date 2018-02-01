// The first mounting lifecycle method is called componentWillMount.
// When a component renders for the first time,
// componentWillMount gets called right before render.

import React from 'react';
import ReactDOM from 'react-dom';

export class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: '' };
    }

// 2) <Example /> calls the first mounting lifecycle method, componentWillMount.
// 3) componentWillMount executes, and an alert appears on the screen.
//    You can call this.setState from within componentWillMount!!!
    componentWillMount() {
        alert('component is about to mount!');
        this.setState({ text: 'Hello world' });
    }

    // 4) After componentWillMount has finished,
    // <Example /> calls the second mounting lifecycle method: render.
    // 5) <h1>Hello world</h1> appears on the screen
    render() {
        return <h1>{this.state.text}</h1>;
    }
}

//1) <Example /> is rendered for the first time.
// <Example />'s mounting period begins.
ReactDOM.render(
    <Example />,
    document.getElementById('app')
);

// 6) Two seconds later, <Example /> renders again.
// componentWillMount does NOT get called,
// because mounting lifecycle events only execute the first time that a component renders.
setTimeout(() => {
    ReactDOM.render(
        <Example />,
        document.getElementById('app')
    );
}, 2000);

