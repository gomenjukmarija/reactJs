import React from 'react';
import ReactDOM from 'react-dom';

// If you want to create a list of JSX elements, then .map() is often your best bet.

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
    <li>{person}</li>
);

ReactDOM.render(
    <ul>{peopleLis}</ul>,
    document.getElementById('app')
);