import React from 'react';
import { Route } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Nav from './Nav'
import Home from './Home'
// import Resume from './Resume'
import Resume1 from './Resume1'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

import { PDFViewer } from '@react-pdf/renderer';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <Header>
        <Nav />
      </Header>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/resume'>
          <Resume1 />
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
      </Layout>
    </div>
  );
}

export default App;
