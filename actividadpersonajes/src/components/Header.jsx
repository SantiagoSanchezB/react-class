import React from 'react';
import '../css/index_css.css';

const Header = () => (
    <div className = "">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">Plunderer</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        <h1 class="Name">Plunderer</h1>
    </div>
);

export default Header;