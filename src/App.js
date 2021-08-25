import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ListarCliente from './cliente/Listar';
import IncluirCliente from '.cliente/Incluir';
import AlterarCliente from '.cliente/Alterar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route>
          <Switch>
           <Route path="/" component={Login}/> 
            <div className="app-content">
            <Route path="/cliente/listar" component={ListarCliente}/>
            <Route path="/cliente/incluir" component={IncluirCliente}/>
            <Route path="/cliente/alterar/:id" component={AlterarCliente}/>
            </div>
          </Switch>
        </Route>
      </header>
    </div>
  );
}

export default App;
