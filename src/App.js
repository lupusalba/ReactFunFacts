import React from 'react';
import Header from './components/Header.js';
import Heading from './components/Heading.js';
import Facts from './components/Facts';


const App = () => {
  return (
    <div className="appContainer">
      <Heading />
      <Header />
      <Facts />
    </div>
  )
}

export default App
