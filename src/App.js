import React from 'react';
import './App.css';
import { BrowserRouter as  Router, NavLink, Switch, Route } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Inicio</NavLink>
              </li>
            <li>
              <NavLink to="/usuarios">Usuarios Cadastrados</NavLink>
              </li>
            <li>
              <NavLink to="/adicionar">Adicionar Usuarios</NavLink>
              </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/usuarios">
            <Usuarios />
          </Route>
          <Route path="/adicionar">
            <AdicionarUsuario />
          </Route>
          <Route path="*">
            <PaginaNaoEncontrada />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

function PaginaNaoEncontrada () {
  return<>
  <h1>404</h1>
  <p>Pagina nao encontrada!</p>
  </>
}

export default App;
