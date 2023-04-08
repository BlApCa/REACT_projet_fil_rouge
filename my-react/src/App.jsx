import React from 'react';
import Header from './components/header/Header';
import PokeListePage from './components/section/PokeListePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <PokeListePage/>
    </div>
  );
}

export default App;