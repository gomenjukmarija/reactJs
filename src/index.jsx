import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child.jsx';

// Parent renders a <Child />, passing in a name prop.
// This name prop is the same value that the <Child /> displays in its <h1></h1>.
// You need Child's dropdown menu to change Parent's this.state.name!
// That will cause <Child /> to get passed a new name prop,
// which will change the name displayed on the screen.

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return <Child name={this.state.name} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);