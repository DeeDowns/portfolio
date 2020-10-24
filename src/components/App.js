import React from 'react';
import Navigation from './Navigation'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Element } from 'react-scroll'

import '../styles/App.css';

function App() {
  
  return (
    <div className="App">
      <header>
        <Navigation />
      </header> 
    
      <Element name='home' className='element home'>
        <Home />
      </Element>

      <Element name='resume' className='element resume'>
        <Resume />
      </Element>

      <hr className='divider'/>

      <Element name='portfolio' className='element portfolio'>
        <Portfolio />
      </Element>

      <Element name='contact' className='element contact'>
        <Contact />
      </Element>
      
    </div>
  );
}

export default App;
