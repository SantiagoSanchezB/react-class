import React from 'react';
import PropTypes from 'prop-types';
import '../css/index_css.css';
import Imagenes from '../img/Imagenes';

const Personajes = ({nombre, edad, count, especie,img}) => (
    <div className="card">
        <div class="card-body">
            <img class="aling pos img-fluid rounded-circle" src={img}/>
            <h5 class="card-title">{nombre}</h5>
            <p class="card-text">Edad: {edad}</p>
            <p class="card-text">Count: {count}</p>
            <p class="card-text">Especie: {especie}</p>
        </div>
    </div>

);

Personajes.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Personajes.defaultProps = {
    nombre :"No se encuentra Nombre",
    edad : "No se encuentra Edad",
    genero: "No se encuentra Genero"
}

export default Personajes;
