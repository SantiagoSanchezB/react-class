import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/index_css.css';
import logo from '../logo.svg';
import Footer from './footerComponent';

const MainMenu = () => (
    <div class="Index">
        <p>Proyecto React - ficha 2242742 - David Sanchez</p>
        <img class="logo" src={logo} />
        <Footer/>
    </div>
)

export default MainMenu;