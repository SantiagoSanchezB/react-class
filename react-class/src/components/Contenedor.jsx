import React from 'react';
import Estudiante from './Estudiante';
import Header from './headerComponent';
import '../css/index_css.css';
import Footer from './footerComponent';

const Estudiantes = [
    {
        "nombre": "Juan Roa",
        "edad": 23,
        "genero" : "M"
    },
    {
        "nombre": "Marta Diaz",
        "edad": 50,
        "genero" : "F"
    },
    {
        "nombre": "David Sanchez",
        "edad": 80,
        "genero" : "M"
    },
    {
        "nombre": "Pepita Gonzales",
        "edad": 12,
        "genero" : "F"
    },
    {
        "nombre": "Santiago Andrade",
        "edad": 71,
        "genero" : "M"
    },
    {
        "nombre": "Jenifer Macias",
        "edad": 90,
        "genero" : "F"
    }
]

const Contenedor = () => (
    <>
        <Header/>
        {
            Estudiantes.map(S => <Estudiante nombre= {S.nombre} edad ={S.edad} genero={S.genero}/>)
        }
        <Footer/>
    </>
);

export default Contenedor;

