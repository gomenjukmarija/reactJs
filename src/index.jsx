import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
    // expression goes here:
    <li key={'person_' + i}>{person + i}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>,
document.getElementById('app'));