/*

The second updating lifecycle method is called shouldComponentUpdate.
When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps,
but still before the rendering begins.

import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subtext: 'Put me in an <h2> please.' };
  }

//   shouldComponentUpdate automatically receives two arguments: nextProps and nextState.
// It's typical to compare nextProps and nextState to the current this.props and this.state,
// and use the results to decide what to do.

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) &&
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}

shouldComponentUpdate should return either true or false.
If shouldComponentUpdate returns true, then nothing noticeable happens.
But if shouldComponentUpdate returns false, then the component will not update!
None of the remaining lifecycle methods for that updating period will be called, including render.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions.
If those conditions are met, then your component will not update.
*/

import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {


    // You want shouldComponentUpdate to return false when a target has already rendered,
    // and is about to repeat the same number as its last render.
    // This will cause Target to cancel its update.

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.number != nextProps.number;
    }

    render() {
        let visibility = this.props.number ? 'visible' : 'hidden';
        let style = {
            position: 'absolute',
            left: random(0, 100) + '%',
            top: random(0, 100) + '%',
            fontSize: 40,
            cursor: 'pointer',
            visibility: visibility
        };

        return (
            <span style={style} className="target">
        {this.props.number}
      </span>
        )
    }
}

Target.propTypes = {
    number: React.PropTypes.number.isRequired
};