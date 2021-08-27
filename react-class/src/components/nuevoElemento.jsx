import React from 'react';

let Estudiante ={
    nombre: "Santiago",
    edad: 17
};

var color = "azul";

const NuevoElemento = (props) => (
    <div className="contenedor">
        <h3>Estudiante</h3>
        <h4>{ Estudiante.nombre }</h4>
        <p>Edad: {Estudiante.edad }</p>
        <span>{color}</span>
    </div>
)

export default NuevoElemento;