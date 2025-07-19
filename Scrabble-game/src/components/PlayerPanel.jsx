import React from 'react';
import LetterRack from './LetterRack';

const PlayerPanel = ({ players, onSelectTile, selectedTile }) => {
  const activePlayer = players.find(p => p.isActive);

  return (
    <div
      className="player-panel"
      style={{
        background: 'linear-gradient(to right, #fdf2e9, #fce4ec)',
        padding: '16px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(255, 87, 34, 0.3)',
        border: '2px solid #d7884a',
        marginTop: '20px'
      }}
    >
      <h2 style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#5a0000',
        marginBottom: '12px'
      }}>
        ⚔️ Chakra Tiles — {activePlayer?.name || 'Player'}’s Turn
      </h2>

      <LetterRack
        hand={activePlayer ? activePlayer.hand : []}
        onSelect={onSelectTile}
        selectedTile={selectedTile}
      />
    </div>
    
  );
};

export default PlayerPanel;
