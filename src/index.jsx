import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child.jsx';
import { Sibling } from './sibling.jsx';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div>
                <Child onChange={this.changeName} />
                {/*That name is stored in Parent's state. Parent will have to pass the name to Sibling, so that Sibling can display it.*/}
                {/*In Parent's render function, pass the name to <Sibling />:*/}
                <Sibling name={this.state.name}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);