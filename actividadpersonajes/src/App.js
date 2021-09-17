import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contenedor from './components/Contenedor';
import Header from './components/Header';
import PersonajeDetalle from './components/PersonajeDetalle';
import MainMenu from './components/MainMenu';
import Contacto from './components/Contacto';
import DatosApi from './components/Molecules/DatosApi';

const App = () => (
  <Router> 
    <Header/>
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/Personajes" exact component={ Contenedor }/>
        <Route path="/Personajes/:id" exact component={ PersonajeDetalle }/>
        <Route path="/Contacto" exact component={ Contacto }/>
        <Route path="/API" exact component={DatosApi}/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default App;
