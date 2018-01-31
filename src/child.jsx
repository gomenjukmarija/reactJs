import React from 'react';

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

// What are the properties on propTypes supposed to be, exactly?
// The name of each property in propTypes should be the name of an expected prop.
// In our case, BestSeller expects a prop named title, author,  weeksOnList.//
// The value of each property in propTypes should fit this pattern:
// React.PropTypes.expected-data-type-goes-here
// If you add .isRequired to a propType, then you will get a console warning if that prop isn't sent.

BestSeller.propTypes = {
    title:   React.PropTypes.string.isRequired,
    author:     React.PropTypes.string.isRequired,
    weeksOnList: React.PropTypes.number.isRequired
};