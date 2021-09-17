import React from 'react';
import '../css/index_css.css';
import Footer from './footerComponent';

const estudiantes = [
    {
        "id":1,
        "nombre": "Juan Roa",
        "edad": 23,
        "genero" : "M",
        "grado" : "10"
    },
    {
        "id":2,
        "nombre": "Marta Diaz",
        "edad": 50,
        "genero" : "F",
        "grado" : "10"
    },
    {
        "id":3,
        "nombre": "David Sanchez",
        "edad": 80,
        "genero" : "M",
        "grado" : "10"
    },
    {
        "id":4,
        "nombre": "Pepita Gonzales",
        "edad": 12,
        "genero" : "F",
        "grado" : "10"
    },
    {
        "id":5,
        "nombre": "Santiago Andrade",
        "edad": 71,
        "genero" : "M",
        "grado" : "10"
    },
    {
        "id":6,
        "nombre": "Jenifer Macias",
        "edad": 90,
        "genero" : "F",
        "grado" : "10"
    }
]


const EstudianteDestalle = ({match}) => {
    const estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0];
    return(
        <>
        {
            estudiante ? (
                <div class = "Element">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title">{estudiante.nombre}</h5>
                            <p class="card-text">Edad: {estudiante.edad}</p>
                            <p class="card-text">Genero: {estudiante.genero}</p>
                            <p class="card-text">Grado: {estudiante.grado}</p>
                        </div>
                    </div>
                </div>
            ):
                <h1>El id No esta registrado</h1>
            }
            <div class = "Element">
                <a class="btn btn-dark" href={`/Estudiantes`} >Ver todos</a>
            </div>
        <Footer/>
        </>
    );  
};

export default EstudianteDestalle;