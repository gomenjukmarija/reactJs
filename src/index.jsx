import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

class Friend extends React.Component {
    render() {

        const n = Math.floor(Math.random()*3+0);

        const friend = friends[n];

        console.log(n);

        return (
            <div>
                <h1>{friend.title}</h1>
                <img src={friend.src} />
            </div>
        );
    }
}

ReactDOM.render(
    <Friend />,
    document.getElementById('app')
);