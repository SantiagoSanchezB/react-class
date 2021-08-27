import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/headerComponent';
import Estudiante from './components/Estudiante';
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
