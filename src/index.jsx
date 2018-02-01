/*

The third updating lifecycle method is componentWillUpdate.

componentWillUpdate gets called in between shouldComponentUpdate and render.

componentWillUpdate receives two arguments: nextProps and nextState.

import React from 'react';

export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

You cannot call this.setState from the body of componentWillUpdate!
Which begs the question, why would you use it?
The main purpose of componentWillUpdate is to interact with things outside of the React architecture.
If you need to do non-React setup before a component renders,
such as checking the window size or interacting with an API,
then componentWillUpdate is a good place to do that.

If that sounds abstract, that's okay!
All of the lifecycle methods might feel a bit theoretical,
until you've used them in real-life scenarios.
You'll be doing more of that in the next course.
*/

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 'highest': 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.number > this.state.highest) {
            this.setState({
                highest: nextProps.number
            });
        }
    }

    // On every render, you want componentWillUpdate to check whether the background is yellow already.
    // If it isn't, then you want to check whether the top number is at least 950,000.
    // If it is, then make the background yellow.
    // Of course, you'll also need to change the color back to white when a user starts a new game!
    // You can do this with the help of this.props.game,
    // a boolean that reports whether or not a current game is in progress.

    componentWillUpdate(nextProps, nextState) {
        if (document.body.style.background != yellow
            && this.state.highest >= 850*100) {
            document.body.style.background = yellow;
        } else if (!this.props.game
            && nextProps.game) {
            document.body.style.background = 'white';
        }
    }

    render() {
        return (
            <h1>
                Top Number: {this.state.highest}
            </h1>
        );
    }
}

TopNumber.propTypes = {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
};
