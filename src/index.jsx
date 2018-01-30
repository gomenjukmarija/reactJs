import React from 'react';
import ReactDOM from 'react-dom';

// You will often want a component to display the information that you pass.
//
//    Here's how to make a component display passed-in information:
//
// 1 - Find the component class that is going to receive that information.
// 2 - Include this.props.name-of-information in that component class's render method's return statement.

class Greeting extends React.Component {
    render() {
        return <h1>Hi there, {this.props.firstName}!</h1>;
    }
}

ReactDOM.render(
    <Greeting firstName='Mary' />,
    document.getElementById('app')
);
