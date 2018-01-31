import React from 'react';
import ReactDOM from 'react-dom';

// In React, if you write a style value as a number, then the unit "px" is assumed.
//
// How convenient! If you want a font size of 30px, you can write:
//
// { fontSize: 30 }

const styles = {
    background: 'lightblue',
    color:      'darkred',
    marginTop: 100,
    fontSize: 50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
    styleMe,
    document.getElementById('app')
);