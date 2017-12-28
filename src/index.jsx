import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {

    get name() {
        return 'whatever-your-name-is-goes-here';
    }

    // what does this mean?
    // The simple answer is that this refers to an instance of MyName.
    // The less simple answer is that this refers to the object on which this's enclosing method,
    // in this case .render(), is called.
    // It is almost inevitable that this object will be an instance of MyName, but technically it could be something else.

    render() {
        return <h1>My name is {this.name}!</h1>;
    }
}

ReactDOM.render(<MyName />, document.getElementById('app'));