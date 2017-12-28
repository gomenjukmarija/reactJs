import React from 'react';
import ReactDOM from 'react-dom';

//ReactDOM is the name of a JavaScript library.
// ReactDOM.render()'s first argument should evaluate to a JSX expression,
// it doesn't have to literally be a JSX expression.//
// The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

// The second argument document.getElementById('app').//
//That element acted as a container for ReactDOM.render()'s first argument!
// At the end of the previous exercise, this appeared on the screen:
// <main id="app">
//     <h1>Render me!</h1>
// </main>

const toDoList = (
    <ol>
        <li>Learn React</li>
        <li>Become a Developer</li>
    </ol>
);

ReactDOM.render(
    toDoList,
    document.getElementById('app')
);


// One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
// That means that if you render the exact same thing twice in a row, the second render will do nothing:

ReactDOM.render(
    toDoList,
    document.getElementById('app')
);

//Only updating the necessary DOM elements is a large part of what makes React so successful.

