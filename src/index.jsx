import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './child.jsx';
import { styles } from './styles.jsx';

// What if you want to reuse styles for several different components?

// One way to make styles reusable is to keep them in a separate JavaScript file.
// This file should export the styles that you want to reuse, via export.
// You can then import your styles into any component that wants them.

const divStyle = {
    background: styles.background,
    height:     '100%'
};

export class Home extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <AttentionGrabber />
                <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);