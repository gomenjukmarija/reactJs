import React from 'react';
import ReactDOM from 'react-dom';

// Notice that its instructions object only has one property: render().
// When you separate a container component from a presentational component,
// the presentational component will always end up like this:
// one render() function, and no other properties.
// If you have a component class with nothing but a render function,
// then you can rewrite that component class in a very different way.
// Instead of using React.Component, you can write it as JavaScript function!
//  A component class written as a function is called a stateless functional component.
// Stateless functional components have some advantages over typical component classes.
// We'll cover those advantages in this lesson.

// export class GuineaPigs extends React.Component {
//
//     render() {
//         const src = this.props.src;
//         return (
//             <div>
//                 <h1>Cute Guinea Pigs</h1>
//                 <img src={src} />
//             </div>
//         );
//     }
// }

export const Friend = () => {
    return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

ReactDOM.render(
    <Friend />,
    document.getElementById('app')
);