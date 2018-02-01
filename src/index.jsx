/*
componentWillUnmount
A component's unmounting period occurs when the component is removed from the DOM.
This could happen if the DOM is rerendered without the component,
or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!
componentWillUnmount gets called right before a component is removed from the DOM.
If a component initiates any methods that require cleanup,
then componentWillUnmount is where you should put that cleanup.

import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './child.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enthused: false,
            text: ''
        };

        this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
        this.addText = this.addText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEnthusiasm() {
        this.setState({
            enthused: !this.state.enthused
        });
    }

    setText(text) {
        this.setState({ text: text });
    }

    addText(newText) {
        let text = this.state.text + newText;
        this.setState({ text: text });
    }

    handleChange(e) {
        this.setText(e.target.value);
    }

    render() {
        let button;
        if (this.state.enthused) {
            button = (
                <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
            );
        } else {
            button = (
                <button onClick={this.toggleEnthusiasm}>
                    Add Enthusiasm!
                </button>
            );
        }

        return (
            <div>
                <h1>Auto-Enthusiasm</h1>
                <textarea rows="7" cols="40" value={this.state.text}
                          onChange={this.handleChange}>
        </textarea>
                {button}
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);