import React from 'react';

// If a user selects a new name from the dropdown menu,
// then you want Child to call changeName.
// changeName will change the parent's this.state.name,
// which will change the name displayed in the <h1></h1>.
//
// Inside of Child's render function, give <select> a new attribute.
// Make the attribute's name onChange. This will create an event listener.
// Make the attribute's value equal to the function that you passed in from Parent.js.


export class Child extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // This new function should take an event object as an argument,
    // extract the name that you want from that event object, and then call the event handler,
    // passing in the extracted name!
    // It sounds like a lot, but you will see this happen so often that it will soon feel intuitive.

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names" onChange={this.handleChange}>
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