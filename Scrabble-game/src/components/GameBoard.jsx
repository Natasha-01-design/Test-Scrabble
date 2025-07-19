import React from 'react';
import './GameBoard.css';

const getBonusClass = (row, col) => {
  const tripleWord = [
    [0, 0], [0, 7], [0, 14],
    [7, 0], [7, 14],
    [14, 0], [14, 7], [14, 14]
  ];
  const doubleLetter = [
    [0, 3], [2, 6], [3, 0], [3, 14],
    [11, 0], [11, 14], [12, 6], [14, 3]
  ];

  if (tripleWord.some(([r, c]) => r === row && c === col)) return 'triple-word';
  if (doubleLetter.some(([r, c]) => r === row && c === col)) return 'double-letter';
  return '';
};

const GameBoard = ({
  board,
  placements = [],
  selectedTile,
  castMode,
  onPlaceLetter
}) => {
  return (
    <div className="board-grid">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isNew = placements.some(p => p.row === rowIndex && p.col === colIndex);
          const bonusClass = getBonusClass(rowIndex, colIndex);
          const classes = ['cell', bonusClass];
          if (cell) classes.push('filled');
          if (isNew) classes.push('new');
          if (isNew && castMode) classes.push('cast');

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => selectedTile && onPlaceLetter(rowIndex, colIndex, selectedTile)}
              className={classes.join(' ')}
              title={bonusClass ? bonusClass.replace('-', ' ').toUpperCase() : ''}
            >
              {cell || (bonusClass ? bonusClass.replace('-', ' ').toUpperCase() : '')}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameBoard;
