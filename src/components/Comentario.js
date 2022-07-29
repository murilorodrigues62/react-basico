import React from 'react';
import './Comentario.css';

//JSX - código parecido com HTML dentro do JS.
// class do HTML por exemplo é className
const Comentario = props => (
    <div className='Comentario'>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>
    </div>
);

export default Comentario;