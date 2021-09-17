import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contenedor from './components/Contenedor';
import Contacto from './components/Contacto';
import Header from './components/headerComponent';
import EstudianteDestalle from './components/EstudianteDetalle';
import MainMenu from './components/MainMenu';
import DatosApi from './components/Molecules/DatosApi';

const App = () => (
  <Router>
    <Header/>
    <Switch>
        <Route path="/" exact component={ MainMenu }/>
        <Route path="/Estudiantes" exact component={ Contenedor }/>
        <Route path="/Estudiantes/:id" exact component={ EstudianteDestalle }/>
        <Route path="/Contacto" exact component={ Contacto }/>
        <Route path="/DatosApi" exact component={ DatosApi }/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default App;
