import React, { useState } from 'react';
import Board from './Board';
import TileRack from './TileRack';
import GameSidebar from './GameSidebar';
import PlayWordButton from './PlayWordButton';
import GameStateManager from './GameStateManager';
import BoardInteraction from './BoardInteraction';
import WordValidator from "./WordValidation";
import TurnManager from './TurnManager';

function GamePage(){
    const [board, setBoard] = useState([]);
  const [players, setPlayers] = useState([
    { name: 'User1', score: 0, hand: [] },
    { name: 'User2', score: 0, hand: [] }
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [wordScore, setWordScore] = useState(0);
  const [selectedTile, setSelectedTile] = useState(null);
  const [timer] = useState('00:00');

  return (
    <div>
    <GameStateManager setBoard={setBoard} setPlayers={setPlayers}>
      <BoardInteraction
        board={board} players={players} currentPlayerIndex={currentPlayerIndex}
        selectedTile={selectedTile} setBoard={setBoard} setPlayers={setPlayers} setSelectedTile={setSelectedTile}
      >
        {({ handleCellClick, handleTileClick }) => (
          <WordValidator
            board={board} currentPlayer={players[currentPlayerIndex]} setPlayers={setPlayers}
            currentPlayerIndex={currentPlayerIndex} setCurrentPlayerIndex={setCurrentPlayerIndex} setWordScore={setWordScore}
          >
            {({ playWord }) => (
              <TurnManager currentPlayerIndex={currentPlayerIndex} setCurrentPlayerIndex={setCurrentPlayerIndex}>
                {({ handlePass }) => (
                  <div className="main-container">
                    <Board board={board} onCellClick={handleCellClick} />
                    <GameSidebar
                      players={players} currentPlayerIndex={currentPlayerIndex} timer={timer} wordScore={wordScore}
                      onPass={handlePass}
                    />
                    <TileRack tiles={players[currentPlayerIndex].hand} onTileClick={handleTileClick} />
                    <PlayWordButton playWord={playWord} />
                  </div>
                )}
              </TurnManager>
            )}
          </WordValidator>
        )}
      </BoardInteraction>
    </GameStateManager>
    </div>
  );
}


export default GamePage;
