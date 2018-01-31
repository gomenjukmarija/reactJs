import React from 'react';

// A child component updates its parent's state,
// and the parent passes that state to a sibling component.

// One of the very first things that you learned about components is that they should only have one job.//
// In the last lesson, Child had two jobs:
// 1 - Child displayed a name.
// 2 - Child offered a way to change that name.

// You should make like Solomon and divide Child in two:
// one component for displaying the name,
// and a different component for allowing a user to change the name.

// Notice that these lines have vanished:
//<h1>
//    Hey, my name is {this.props.name}!
//</h1>

export class Child extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <select
                    id="great-names"
                    onChange={this.handleChange}>

                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}