import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child.jsx';

// We now need to make sure that the .changeName() method will always refer to the instance of Parent,
// even when we pass it down to Child to use.
// In the constructor method of Parent,
// bind this.changeName to the current value of this and store it in this.changeName.

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        // Pass .changeName() down to Child!
        // add a second attribute to <Child />.
        // Give this attribute a name of onChange, and a value of the changeName method.
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);