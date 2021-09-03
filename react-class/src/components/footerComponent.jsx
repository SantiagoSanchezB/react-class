import React from 'react';
import logoGit from'../github.svg';
import '../css/index_css.css';

const Footer = () => (
    <div class="footer position-fixed w-100 bottom-0">
        <footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3">
                © 2020 Copyright: Santiago Sanchez
                <a class="text-muted bar" href="https://github.com/SantiagoSanchezB"><img src={logoGit}/></a>
            </div>
        </footer>
    </div>
);

export default Footer;