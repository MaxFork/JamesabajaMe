import React, {createRef} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import './scss/styles.scss'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
