import React,  {useState} from 'react';

const TodoJunto = (props) => {

    const  {nombre, apellido, color, edad:initialAge} = props;

    const [edad, setEdad] = useState(initialAge);

    const aumentarEdad = () =>   {
        setEdad((currEdad)=>currEdad+1);
    }

    return (
        <div>
            <h1>{apellido}, {nombre} </h1>
            <div> edad:{edad} </div>
            <div> color de pelo: {color} </div>
            <button onClick={aumentarEdad}>Boton Cumpleaños para {apellido} {nombre} </button>
        </div>
    );
}

export default TodoJunto;
