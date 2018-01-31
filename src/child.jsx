import React from 'react';

// presentational component
// That means that its only job will be to render HTML-like JSX.

export class GuineaPigs extends React.Component {

    render() {
        const src = this.props.src;
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src} />
            </div>
        );
    }
}