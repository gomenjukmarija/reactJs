import React from 'react';
import ReactDOM from 'react-dom';

// Validation can ensure that your props are doing what they're supposed to be doing.
// If props are missing, or if they're present but they aren't what you're expecting,
// then a warning will print in the console.
// This is useful, but reason #2 is arguably more useful: documentation.
// Documenting props makes it easier to glance at a file and quickly understand
// the component class inside.
// When you have a lot of files, and you will, this can be a huge benefit.


export class BestSeller extends React.Component {
    render() {
        return (
            <li>
                Title: <span>
          {this.props.title}
        </span><br />

                Author: <span>
          {this.props.author}
        </span><br />

                Weeks: <span>
          {this.props.weeksOnList}
        </span>
            </li>
        );
    }
}

BestSeller.propTypes = {
};
