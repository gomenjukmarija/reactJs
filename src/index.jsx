import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return (
            <button>
                {this.props.text}
            </button>
        );
    }
}

// If nobody passes any text to Button, then Button's display will be blank.
// It would be better if Button could display a default message instead.
Button.defaultProps = { text: 'I am a button' };

// Your new prop should override the default, making the <button></button> sad again :(
ReactDOM.render(
    <Button text=""/>,
    document.getElementById('app')
);