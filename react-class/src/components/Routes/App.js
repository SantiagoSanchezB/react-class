import logo from '../../logo.svg';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contenedor from '../Molecules/Contenedor';
import Contacto from '../Molecules/Contacto';
import Header from '../Organisms/headerComponent';
import EstudianteDestalle from '../Pages/EstudianteDetalle';
import MainMenu from '../Pages/MainMenu';
import DatosApi from '../Molecules/DatosApi';

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
