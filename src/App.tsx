import React from 'react'
import './App.css'

import Header from './Components/Header'

export default function App() {
  const [darkMode, setDatkMode] = React.useState(false);

  function toggleDarkMode() {
    setDatkMode(pendingMode => !pendingMode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}