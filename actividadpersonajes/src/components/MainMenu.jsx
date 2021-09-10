import React from 'react';
import '../css/index_css.css';
import { NavLink } from 'react-router-dom';


const MainMenu = () => (
    <ul class="Element">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/Personajes">Personajes</NavLink></li>
    </ul>
)

export default MainMenu;