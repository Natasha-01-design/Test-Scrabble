import React from 'react';
import { useGameState } from './state/GameState';
import PlayerPanel from './components/PlayerPanel';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

const SpellGridScrabble = () => {
  const {
    board,
    placements,
    players,
    gameOver,
    lastWord,
    selectedTile,
    castMode,
    setSelectedTile,
    placeLetter,
    nextTurn,
    isSubmitting,
    submitWord,
  } = useGameState();

  const currentTurnIndex = players.findIndex(p => p.isActive);

  return (
    <div
      className="game-layout"
      style={{
        padding: '20px',
        fontFamily: "'Poppins', sans-serif",
        display: 'flex',
        gap: '40px',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom right, #fbe0c3, #ffe6d2, #d4e3f5)',
        minHeight: '100vh'
      }}
    >
  
        <div className="left-panel" style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
        <div>
          <h1
            className="game-title"
            style={{
              color: '#4b2e2e',
              textShadow: '1px 1px 2px #fff0cc',
              marginBottom: '10px'
            }}
          >
            Spell Grid: Scrabble
          </h1>
          <h2 className="board-label" style={{ color: '#5a3d2b' }}>🧩 Chakra Board</h2>
        </div>

        <GameBoard
          board={board}
          placements={placements}
          selectedTile={selectedTile}
          castMode={castMode}
          onPlaceLetter={placeLetter}
        />

        <PlayerPanel
          players={players}
          onSelectTile={setSelectedTile}
          selectedTile={selectedTile}
        />

        <div className="action-buttons" style={{ marginTop: '20px' }}>
          {!gameOver ? (
            <>
              <button
                onClick={submitWord}
                disabled={isSubmitting}
                className="submit-btn"
                style={{
                  marginRight: '12px',
                  borderRadius: '6px',
                  backgroundColor: '#00cc88',
                  color: '#fff',
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  border: 'none',
                  boxShadow: '0 0 8px #00cc88',
                  cursor: 'pointer'
                }}
              >
                ✨ Submit Word
              </button>
              <button
                onClick={nextTurn}
                className="pass-btn"
                style={{
                  borderRadius: '6px',
                  backgroundColor: '#ffaa00',
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  color: '#000',
                  border: 'none',
                  boxShadow: '0 0 8px #ffaa00',
                  cursor: 'pointer'
                }}
              >
                🔁 End Turn / Pass Chakra
              </button>
            </>
          ) : (
            <h2 className="victory-text" style={{ color: '#d64545', marginTop: '20px' }}>
              👑 Realm Has Spoken – Victory!
            </h2>
          )}
        </div>
        
      </div>

      <div className="right-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <ScoreBoard
          players={players}
          currentTurn={currentTurnIndex}
          nextTurn={nextTurn}
          isPaused={isSubmitting}
        />
      </div>
    </div>
  );
};

export default SpellGridScrabble;
