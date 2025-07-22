import React from 'react';

function GameSidebar({ players, currentPlayerIndex, timer, wordScore, onPass }){
    return (
        <div className="sidebar">
    <h2>Current Player: {players[currentPlayerIndex].name}</h2>
    <p>Score: {players[currentPlayerIndex].score}</p>
    <p>Word Score: {wordScore}</p>
    <p>Timer: {timer}</p>
    <button onClick={onPass}>Pass Turn</button>
  </div>
    )

}

export default GameSidebar;