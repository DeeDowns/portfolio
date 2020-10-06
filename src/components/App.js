import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
// import Resume from './Resume'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      
      <header>
        <Navigation />
      </header>
      
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/resume'>
        <Resume />
      </Route>

      <Route exact path='/portfolio'>
        <Portfolio />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>

     
      
      
    </div>
  );
}

export default App;
