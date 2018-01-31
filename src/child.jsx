import React from 'react';
import PropTypes from 'prop-types';

export const GuineaPigs = (props) => {
    let src = props.src;
    return (
        <div>
            <h1>Cute Guinea Pigs</h1>
            <img src={src} />
        </div>
    );
}

// How could you write propTypes for a stateless functional component?

// It turns out the process if fairly similar.
// To write propTypes for a stateless functional component,
// you define a propTypes object as a property of the stateless
// functional component itself. Here's what that looks like:

GuineaPigs.propTypes = {
    src: PropTypes.string.isRequired
};
