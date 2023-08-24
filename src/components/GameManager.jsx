import React, { useState } from 'react';

function Game() {
  const [gameState, setGameState] = useState('start');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleNewGame = () => {
    setGameState('start');
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
  };

  const handlePlayer1Win = () => {
    setGameState('win');
    setWinner('player1');
  };

  const handlePlayer2Win = () => {
    setGameState('win');
    setWinner('player2');
  };


  const handleReset = () => {
    handleNewGame();
  };

  return (
    <div>
      {gameState === 'start' && (
        <div>
          <h1>Start Game</h1>
          <input
            type="text"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <input
            type="text"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <button onClick={handleNewGame}>Start</button>
        </div>
      )}

      {gameState === 'playing' && (
        <div>
          <h1>{player1Name} vs {player2Name}</h1>
          <p>Score: {player1Score} - {player2Score}</p>
          <button onClick={() => handlePlayer1Win()}>Win</button>
          <button onClick={() => handlePlayer2Win()}>Lose</button>
        </div>
      )}

      {gameState === 'win' && (
        <div>
          <h1>{winner} Wins!</h1>
          <p>Final Score: {player1Score} - {player2Score}</p>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}

      {gameState === 'draw' && (
        <div>
          <h1>Draw!</h1>
          <p>Final Score: {player1Score} - {player2Score}</p>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Game;