import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/headerComponent';
import Footer from './components/footerComponent';
import Contenedor from './components/Contenedor';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('Header')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('Footer')
);

ReactDOM.render(
  <React.StrictMode>
    <Contenedor />
  </React.StrictMode>,
  document.getElementById('Element')
);


reportWebVitals();
