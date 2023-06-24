import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [gameBoard, setGameBoard] = useState([]);

  // Function to handle making a move
  const handleMove = () => {
    // Implement the logic to send the move data to the backend
    // ...

    // Update the game board and message state based on the response
    setGameBoard([...gameBoard, 'X']);
    setMessage('Move processed successfully');
  };

  const cards = [
    'FREE', '10♠', 'Q♠', 'K♠', 'A♠', '2♦', '3♦', '4♦', '5♦', 'FREE',
    '9♠', '10♥', '9♥', '8♥', '7♥', '6♥', '5♥', '4♥', '3♥', '6♦',
    '8♠', 'Q♥', '7♦', '8♦', '9♦', '10♦', 'Q♦', 'K♦', '2♥', '7♦',
    '7♠', 'K♥', '6♦', '2♣', 'A♥', 'K♥', 'Q♥', 'A♦', '2♠', '8♦',
    '6♠', 'A♥', '5♦', '3♣', '4♥', '3♥', '10♥', 'A♣', '3♠', '9♦',
    '5♠', '2♣', '4♦', '4♣', '5♥', '2♥', '9♥', 'K♣', '4♠', '10♦',
    '4♠', '3♣', '3♦', '5♣', '6♠', '7♠', '8♠', 'Q♣', '5♠', 'Q♦',
    '3♠', '4♣', '2♦', '6♣', '7♣', '8♣', '9♣', '10♣', '6♠', 'K♦',
    '2♠', '5♣', 'A♠', 'K♠', 'Q♠', '10♠', '9♠', '8♠', '7♠', 'A♦',
    'FREE', '6♣', '7♣', '8♣', '9♣', '10♣', 'Q♣', 'K♣', 'A♣', 'FREE',
    // Deck 1
    // 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'Q♠', 'K♠',
    // 'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'Q♥', 'K♥',
    // 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'Q♦', 'K♦',
    // 'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'Q♣', 'K♣',
    // // Deck 2
    // 'A♤', '2♤', '3♤', '4♤', '5♤', '6♤', '7♤', '8♤', '9♤', '10♤', 'Q♤', 'K♤',
    // 'A♡', '2♡', '3♡', '4♡', '5♡', '6♡', '7♡', '8♡', '9♡', '10♡', 'Q♡', 'K♡',
    // 'A♢', '2♢', '3♢', '4♢', '5♢', '6♢', '7♢', '8♢', '9♢', '10♢', 'Q♢', 'K♢',
    // 'A♧', '2♧', '3♧', '4♧', '5♧', '6♧', '7♧', '8♧', '9♧', '10♧', 'Q♧', 'K♧',
  ];
  return (
    <div className="App">
      <h1>Sequence Game</h1>
      <div className="game-board">
        {cards.map((card) => (
          <div
            className={`cell ${gameBoard.includes(card) ? 'selected' : ''}`}
            key={card}
          >
            {card}
          </div>
        ))}
      </div>
      <button onClick={handleMove}>Make Move</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
