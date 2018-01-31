import React from 'react';

// Stateless functional components usually have props passed to them.//
//To access these props, give your stateless functional component a parameter.
// This parameter will automatically be equal to the component's props object.//
// It's customary to name this parameter props.//
// Not only are stateless functional components more concise,
// but they will subtly influence how you think about components in a positive way.
// They emphasize the fact that components are basically functions!
// A component takes two optional inputs, props and state, and outputs HTML and/or other components.

export const GuineaPigs = (props) => {
    let src = props.src;
    return (
        <div>
            <h1>Cute Guinea Pigs</h1>
            <img src={src} />
        </div>
    );
}