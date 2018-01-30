import React from 'react';
import ReactDOM from 'react-dom';

import { List } from './child.jsx';

// Every component's props object has a property named children.

// this.props.children will return everything in between a component's opening and closing JSX tags.

// So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />.
// They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

// this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

// In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."
//
//  In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.
//
// In Example 3, <BigButton>'s this.props.children would equal undefined.

//  Example 1
// <BigButton>
//     I am a child of BigButton.
// </BigButton>
//
//
//  Example 2
// <BigButton>
// <LilButton />
// </BigButton>
//
//
// Example 3
// <BigButton />

// If a component has more than one child between its JSX tags, then this.props.children will return those children in an array.
// However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

class App extends React.Component {
    render() {
        return (
            <div>
                <List type='Living Musician'>
                    <li>Sachiko M</li>
                    <li>Harvey Sid Fisher</li>
                </List>
                <List type='Living Cat Musician'>
                    <li>Nora the Piano Cat</li>
                </List>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

