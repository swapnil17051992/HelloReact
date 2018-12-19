import React from 'react';
import ReactDOM from 'react-dom';

export class Pract extends React.Component {
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.details}
            </li>
        )
    }
}

