import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contenedor from './components/Contenedor';
import Contacto from './components/Contacto';
import Header from './components/headerComponent';

const App = () => <>
  <Router>
    <Route path="/" exact component={ Header }/>
    <Route path="/Estudiantes" exact component={ Contenedor }/>
    <Route path="/Contacto" exact component={ Contacto }/>
  </Router>
</>

export default App;
