import React from 'react';
import Estudiante from './Estudiante';
import Header from './headerComponent';
import '../css/index_css.css';
import Footer from './footerComponent';
import Footer_A from './footerComponent_A';

const Estudiantes = [
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

const Contenedor = () => (
    <>
        {
            Estudiantes.map(S => <Estudiante nombre= {S.nombre} edad ={S.edad} genero={S.genero} id={S.id}/>)
        }
        <Footer_A/>
    </>
);

export default Contenedor;

