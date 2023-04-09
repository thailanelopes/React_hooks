import React from 'react';
import './App.css';
import { BrowserRouter as  Router, Link } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>Inicio</Link>
              </li>
            <li><a href='/usuarios'>Usuarios Cadastrados</a></li>
            <li><a href='/adicionar'>Adicionar Usuarios</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
    </Router>
  );
}

export default App;
