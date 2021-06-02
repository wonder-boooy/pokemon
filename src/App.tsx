import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pokemon } from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon></Pokemon>
      </header>
    </div>
  );
}

export default App;
