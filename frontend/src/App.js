import React, { useState } from 'react';
import GameBoard from "./components/GameBoard"
import './App.css';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <h1>Sequence Game</h1>
      < GameBoard />
    </div>
  );
}

export default App;
