
import React, { createRef, Component } from "react";

import axios from 'axios';

const cards = [
    'FREE1', '10♤', 'Q♤', 'K♤', 'A♤', '2♢', '3♢', '4♢', '5♢', 'FREE2',
    '9♤', '10♡', '9♡', '8♡', '7♡', '6♡', '5♡', '4♡', '3♡', '6♢',
    '8♤', 'Q♥', '7♦', '8♦', '9♦', '10♦', 'Q♦', 'K♦', '2♥', '7♢',
    '7♤', 'K♥', '6♦', '2♣', 'A♡', 'K♡', 'Q♡', 'A♢', '2♠', '8♢',
    '6♤', 'A♥', '5♦', '3♣', '4♥', '3♥', '10♥', 'A♣', '3♠', '9♢',
    '5♤', '2♧', '4♦', '4♣', '5♥', '2♡', '9♥', 'K♣', '4♠', '10♢',
    '4♤', '3♧', '3♦', '5♣', '6♥', '7♥', '8♥', 'Q♣', '5♠', 'Q♢',
    '3♤', '4♧', '2♦', '6♣', '7♣', '8♣', '9♣', '10♣', '6♠', 'K♢',
    '2♤', '5♧', 'A♠', 'K♠', 'Q♠', '10♠', '9♠', '8♠', '7♠', 'A♦',
    'FREE3', '6♧', '7♧', '8♧', '9♧', '10♧', 'Q♧', 'K♧', 'A♧', 'FREE4',
];

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: 1,
            player2: 2,
            currentPlayer: null,
            board: [],
            gameOver: false
        };
        // this.play = this.play.bind(this);
    }
    initBoard() {
        let board = [];
        for (let card = 0; card < cards.length; card++) {
            let cell = cards[card];
            board.push(cell);
        }

        this.setState({
            board,
            currentPlayer: this.state.player1,
            gameOver: false
        });
    };
    // Function to handle making a move
    handleMove = async () => {
        // Implement the logic to send the move data to the backend
        // ...
        try {
            const response = await axios.post('http://localhost:5000/api/move', {});
            // Process the response or update the UI based on the backend's response
            console.log(response.data);
        } catch (error) {
            // Handle any errors that occurred during the API request
            console.error(error);
        }
    };
    render() {
        return (
            <div className="game-board">
                {cards.map((card) => (
                    <div
                        className={`cell`}
                        key={card}
                        onClick={this.handleMove}
                    >
                        {card}
                    </div>
                ))}
            </div>);
    }
}

export default GameBoard;