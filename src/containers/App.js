import React from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Games from '../components/Games.jsx';
import { Route, Switch } from 'react-router-dom';
import Promos from "../components/Promos"
import Info from '../components/Info';
import Registrarse from "../components/Registrarse"
import Invertir from '../components/Invertir';
import Acceder from '../components/Acceder';
import HomeInversores from '../components/HomeInversores';
import Vender from '../components/vender';

function App() {
  
  return (
    <div className="app">
      <Switch >
        <Route exact path="/"> 
          <Nav/>
          <Home/>
        </Route>
        <Route path="/games">
          <Nav/>
          <Games/>
        </Route> 
        <Route path="/promos"> 
          <Nav/>
          <Promos/>
        </Route>
        <Route path="/info"> 
        <Nav/>
          <Info/>
        </Route>
        <Route path="/invertir"> 
          <Nav/>
          <Invertir/>
        </Route>
        <Route path="/registrarse"> 
          <Nav/>
          <Registrarse/>
        </Route>  
        <Route path="/acceder"> 
          <Nav/>
          <Acceder/>
        </Route>
        <Route path="/homebonos/:id" render={({match})=>  
          <HomeInversores id={(match.params.id)} /> }/>
        <Route path="/vender/:id" render={({match})=>
        <Vender id={(match.params.id)} /> } />
      </Switch>
    </div>
  );
}

export default App;
