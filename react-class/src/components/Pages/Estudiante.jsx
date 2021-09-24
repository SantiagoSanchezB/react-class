import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/index_css.css';
import Header from '../Organisms/headerComponent';
import { Link } from 'react-router-dom';

const Estudiante = ({nombre, edad, genero, id}) => (
    <div class = "Element">
        <div className="card">
            <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">Edad: {edad}</p>
                <p class="card-text">Genero: {genero}</p>
                <p><Link to={`/Estudiantes/${id}`} class="btn btn-outline-secondary">Detalle</Link></p>
            </div>
        </div>
    </div>
);
Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre :"No se encuentra Nombre",
    edad : "No se encuentra Edad",
    genero: "No se encuentra Genero"
}

export default Estudiante;

