import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from './child.jsx';

// Here's how the naming convention works: first, think about what type of event you are listening for.
// In our example, the event type was "click."
// If you are listening for a "click" event, then you name your event handler handleClick.
// If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:

// Your prop name should be the word on, plus your event type.
// If you are listening for a "click" event, then you name your prop onClick.
// If you are listening for a "keyPress" event, then you name your prop onKeyPress:

// class MyClass extends React.Component {
//     handleHover() {
//         alert('I am an event handler.');
//         alert('I will listen for a "hover" event.');
//     }
//
//     render() {
//         return <Child onHover={this.handleHover} />;
//     }
// }

class Talker extends React.Component {
    handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    render() {

        // The name onClick does not create an event listener when used on <Button />
        // - it's just an arbitrary attribute name:
        // The reason for this is that in <Button /> is not an HTML-like JSX element; it's a component instance.
        // Names like onClick only create event listeners if they're used on HTML-like JSX elements.
        // Otherwise, they're just ordinary prop names.
        return <Button onClick={this.handleClick}/>;
    }
}

ReactDOM.render(
    <Talker />,
    document.getElementById('app')
);