import React, { useState } from 'react';


function PlayerCard({ player, isActive, onSelectLetter, selectedLetter }) {
  return (
    <div className={`player-card ${isActive ? 'active' : ''}`}>
      <h3>{player.name}</h3>
      <p>
        Score: <strong>{player.score}</strong>
      </p>

      <div className="player-hand">
        {(player.hand || []).map((letter, index) => (
          <button
            key={index}
            className={`letter-tile ${letter === selectedLetter ? 'selected' : ''}`}
            onClick={() => isActive && onSelectLetter(letter)}
            disabled={!isActive}
            aria-label={`Letter ${letter}`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

  function PlayerInfoPanel({ players = [], currentPlayerIndex, selectedLetter, onSelectLetter }) {
  return (
    <div className="player-info-panel">
      <h2>Players</h2>
      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        players.map((player, index) => (
          <PlayerCard
            key={index}
            player={player}
            isActive={index === currentPlayerIndex}
            selectedLetter={selectedLetter}
            onSelectLetter={onSelectLetter}
          />
        ))
      )}
    </div>
  );
}


  function App() {
  const [players, setPlayers] = useState([
    { name: 'Alice', score: 10, hand: ['A', 'C', 'D'] },
    { name: 'Bob', score: 5, hand: ['E', 'B', 'F'] }
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
    console.log(`Selected letter: ${letter}`);
  };

  const switchPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    setSelectedLetter(null); 
  };

  return (
    <div className="game-wrapper">
      <h1>Scrabble-lite Game</h1>

      <PlayerInfoPanel
        players={players}
        currentPlayerIndex={currentPlayerIndex}
        selectedLetter={selectedLetter}
        onSelectLetter={handleSelectLetter}
      />

      <button onClick={switchPlayer}>End Turn / Switch Player</button>
    </div>
  );
}

export{PlayerInfoPanel,App}