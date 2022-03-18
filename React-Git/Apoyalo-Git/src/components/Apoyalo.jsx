import React, { Component } from 'react';

class Apoyalo extends Component {

    constructor(props)   {
        super(props);
    
    }

    render() {
        return (
            <div>
                <h1> Hola {this.props.nombre},{this.props.apellido} </h1>
                <h2> Age:   {this.props.edad} </h2>
                <h2> Hair color:  {this.props.color}  </h2>
            </div>
        );
    }
}

export default Apoyalo;

