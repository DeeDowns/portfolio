import React from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

import { PDFViewer } from '@react-pdf/renderer';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/resume'>
        <PDFViewer>
          <Resume />
        </PDFViewer>
      </Route>

      <Route exact path='/portfolio'>
        <Portfolio />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
