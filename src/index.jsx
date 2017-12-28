// creates a JavaScript object.
// This object contains properties that are needed to make React work,
// such as React.createElement() and React.Component.
import React from 'react';
// creates another JavaScript object.
// This object contains methods that help React interact with the DOM, such as ReactDOM.render().
import ReactDOM from 'react-dom';


// A component is a small, reusable chunk of code that is responsible for one job.
// That job is often to render some HTML.

//every component must come from a component class.

// React.Component is like a factory that creates components.
// If you have a component class, then you can use that class
// to produce as many components as you want.

// That name should be written in UpperCamelCase.

class MyComponentClass extends React.Component {
 // everything in between these curly-braces is instructions for how to build components
 //    To call a component's render method, you pass that component to ReactDOM.render().
// <MyComponentClass /> will call its render method,
// which will return the JSX element <h1>Hello world</h1>.
// ReactDOM.render() will then take that resulting JSX element,
// and add it to the virtual DOM. This will make "Hello world" appear on the screen.
    render() {
        return <h1>Hello world</h1>;
    }
}

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);