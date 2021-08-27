import React from 'react';
import logoGit from'../github.svg';

const Footer = () => (
    <div>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"/>
                <span class="text-muted">&copy; 2021 Santiago Sanchez</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled">
                <li class="ms-3"><a class="text-muted" href="https://github.com/SantiagoSanchezB"><img src={logoGit}/></a></li>
                <li class="ms-3"><a class="text-muted" href="#"></a></li>
                <li class="ms-3"><a class="text-muted" href="#"></a></li>
            </ul>
        </footer>
    </div>
);

export default Footer;