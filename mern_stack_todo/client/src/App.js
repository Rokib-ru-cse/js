import React from 'react';
import './App.css';
import Home from './components/Todo/Index'
import Insert from './components/Todo/Insert'
import Update from './components/Todo/Update'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          
          <Route path='/' exact component={Home}/>
          <Route path='/insert' exact component={Insert}/>
          <Route path='/update/:id' exact component={Update}/>
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
