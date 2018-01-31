import React from 'react';

// 1) To make a child component update its parent's state,
// the first step is something that you've seen before:
// you must define a state-changing method on the parent.

// Notice that the name inside of the <h1></h1> is equal to this.props.name.
// In order to make the dropdown menu change the <h1></h1>,
// you will need the dropdown menu to change the value of this.props.name!

export class Child extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names">
                    <option value="Frarthur">
                        Frarthur
                    </option>

                    <option value="Gromulus">
                        Gromulus
                    </option>

                    <option value="Thinkpiece">
                        Thinkpiece
                    </option>
                </select>
            </div>
        );
    }
}