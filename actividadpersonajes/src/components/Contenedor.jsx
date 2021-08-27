import React from 'react';
import Personajes from './Personajes';
import Imagenes from '../img/Imagenes';

const Personaje = [
    {
        "nombre": "Licht Bach",
        "edad": 300,
        "genero" : "Masculino",
        "img" : Imagenes.Licht
    },
    {
        "nombre": "Hina",
        "edad": 23,
        "genero" : "Femenino",
        "img" : Imagenes.Hina
    },
    {
        "nombre": "Nana Bassler",
        "edad": 300,
        "genero" : "Femenino",
        "img" : Imagenes.Nana
    },
    {
        "nombre": "Sakai Tokikaze",
        "edad": 300,
        "genero" : "Masculino",
        "img" : Imagenes.Saika
    },
    {
        "nombre": "Sonohara Mizuka",
        "edad": 300,
        "genero" : "Femenino",
        "img" : Imagenes.Sonohara
    },
    {
        "nombre": "Gespenst Zerlegen",
        "edad": 300,
        "genero" : "Masculino",
        "img" : Imagenes.Gespen
    }
]

const Contenedor = () => (
    <>
        {
            Personaje.map(S => <Personajes nombre= {S.nombre} edad ={S.edad} genero={S.genero} img={S.img}/>)
        }
    </>
);

export default Contenedor;
