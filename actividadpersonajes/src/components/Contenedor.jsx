import React from 'react';
import Personajes from './Personajes';
import Imagenes from '../img/Imagenes';

const Personaje = [
    {
        "nombre": "Licht Bach",
        "edad": 300,
        "count" : "10,000,000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Licht
    },
    {
        "nombre": "Hina",
        "edad": 23,
        "count" : "763",
        "especie" : "Humano",
        "img" : Imagenes.Hina
    },
    {
        "nombre": "Nana Bassler",
        "edad": 300,
        "count" : "1",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Nana
    },
    {
        "nombre": "Sakai Tokikaze",
        "edad": 300,
        "count" : "5,246,639",
        "especie" : "763",
        "img" : Imagenes.Saika
    },
    {
        "nombre": "Sonohara Mizuka",
        "edad": 300,
        "count" : "32000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Sonohara
    },
    {
        "nombre": "Pele Poporo",
        "edad": 300,
        "count" : "120",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Gespen
    }
]

const Contenedor = () => (
    <>
        {
            Personaje.map(S => <Personajes nombre= {S.nombre} edad ={S.edad} count={S.count} especie={S.especie} img={S.img}/>)
        }
    </>
);

export default Contenedor;
