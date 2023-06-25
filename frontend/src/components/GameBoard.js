
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
            player1Tokens: [],
            player2: 2,
            currentPlayer: null,
            board: cards,
            gameOver: false
        };
        // this.play = this.play.bind(this);
    }
    // Clear board of tokens
    initBoard() {
        //Copy of initial board, this is probably the wrong way to do this
        let board = Array.from(cards);
        this.setState({
            board,
            currentPlayer: this.state.player1,
            gameOver: false
        });

        console.log(board.length)
    };
    // Function to handle making a move
    handleMove = async (card) => {
        // Implement the logic to send the move data to the backend
        // ...
        try {
            const response = await axios.post('http://localhost:5000/api/move', {});
            // Process the response or update the UI based on the backend's response
            console.log(response.data);
            if (this.state.board.includes(card)) {
                let index = this.state.board.indexOf(card, 0)
                if (index > -1) {
                    console.log(index)
                    this.state.board.splice(index, 1);
                    this.state.player1Tokens.push(card)
                }
                console.log("valid move")
            }
            else {
                console.log("invalid move")
            }
            console.log(this.state.board)
            console.log(this.state.player1Tokens.includes(card))
        } catch (error) {
            // Handle any errors that occurred during the API request
            console.error(error);
        }
    };
    render() {
        return (
            <div>
                <div className="button" onClick={() => { this.initBoard() }}>New Game</div>
                <div className="game-board">
                    {cards.map((card) => (
                        <div
                            className={`cell ${this.state.player1Tokens.includes(card) ? 'selected' : ''}`}
                            // className={'cell'}
                            key={card}
                            onClick={() => this.handleMove(card)}
                        >
                            {card}
                        </div>
                    ))}
                </div>
            </div>);
    }
}

export default GameBoard;