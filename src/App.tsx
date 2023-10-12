import React from 'react'
import './App.css'

import Header from './Components/Header'
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';

export default function App() {
  const [darkMode, setDatkMode] = React.useState(false);

  function toggleDarkMode() {
    setDatkMode(pendingMode => !pendingMode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}