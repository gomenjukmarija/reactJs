
// The final mounting lifecycle method is called componentDidMount.
// When a component renders for the first time,
// componentDidMount gets called right after the HTML from render has finished loading.
// Look in the code editor for an example of componentDidMount.

// import React from 'react';
//
// export class Example extends React.Component {
//     componentDidMount() {
//         alert('component just finished mounting!');
//     }
//
//     render() {
//         return <h1>Hello world</h1>;
//     }
// }
//  componentDidMount gets used a lot!
//  If your React app uses AJAX to fetch initial data from an API,
//  then componentDidMount is the place to make that AJAX call.
//  More generally, componentDidMount is a good place to connect a React app
//  to external applications, such as web APIs or JavaScript frameworks.
//  componentDidMount is also the place to set timers using setTimeout or setInterval.
//  If that sounds vague, don't worry.
//  You'll put lifecycle methods into practice in this course's final project

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
    componentWillMount() {
        alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
    }

    componentDidMount() {
        alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
    }

    render() {

        alert('Flashy is rendering!');

        return (
            <h1 style={{ color: this.props.color }}>
                OOH LA LA LOOK AT ME I AM THE FLASHIEST
            </h1>
        );
    }
}

ReactDOM.render(
    <Flashy color='red' />,
    document.getElementById('app')
);

setTimeout(() => {
    ReactDOM.render(
        <Flashy color='green' />,
        document.getElementById('app')
    );
}, 2000);