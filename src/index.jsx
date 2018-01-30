import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

// When a user clicks on the <button></button>, the .changeColor() method is called. Take a look at .changeColor()'s definition.//
// .changeColor() calls this.setState(), which updates this.state.color.
// However, even if this.state.color is updated from green to yellow, that alone shouldn't be enough to make the screen's color change!
//The screen's color doesn't change until Toggle renders.
//Inside of the render function, it's this line: <div style={{background:this.state.color}}>
// that changes a virtual DOM object's color to the new this.state.color, eventually causing a change in the screen.
// Here's why: Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
// Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().
//That is why you can't call this.setState() from inside of the .render() method!
// this.setState() automatically calls .render(). If .render() calls this.setState(),
// then an infinite loop is created.

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { color: green };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        const newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div style={{background: this.state.color}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
