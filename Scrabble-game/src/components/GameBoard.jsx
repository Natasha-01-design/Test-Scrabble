import React from 'react';
import './GameBoard.css';

const getBonusType = (row, col) => {
  const tripleWord = [
    [0, 0], [0, 7], [0, 14],
    [7, 0], [7, 14],
    [14, 0], [14, 7], [14, 14]
  ];
  const doubleWord = [
    [1, 1], [2, 2], [3, 3], [4, 4],
    [10, 10], [11, 11], [12, 12], [13, 13],
    [1, 13], [2, 12], [3, 11], [4, 10],
    [10, 4], [11, 3], [12, 2], [13, 1],
    [7, 7]
  ];
  const tripleLetter = [
    [1, 5], [1, 9], [5, 1], [5, 5], [5, 9], [5, 13],
    [9, 1], [9, 5], [9, 9], [9, 13], [13, 5], [13, 9]
  ];
  const doubleLetter = [
    [0, 3], [0, 11], [2, 6], [2, 8], [3, 0], [3, 7], [3, 14],
    [6, 2], [6, 6], [6, 8], [6, 12],
    [7, 3], [7, 11],
    [8, 2], [8, 6], [8, 8], [8, 12],
    [11, 0], [11, 7], [11, 14], [12, 6], [12, 8], [14, 3], [14, 11]
  ];

  if (tripleWord.some(([r, c]) => r === row && c === col)) return { class: 'triple-word', label: 'TW' };
  if (doubleWord.some(([r, c]) => r === row && c === col)) return { class: 'double-word', label: 'DW' };
  if (tripleLetter.some(([r, c]) => r === row && c === col)) return { class: 'triple-letter', label: 'TL' };
  if (doubleLetter.some(([r, c]) => r === row && c === col)) return { class: 'double-letter', label: 'DL' };
  if (row === 7 && col === 7) return { class: 'center', label: '★' };
  return { class: '', label: '' };
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
          const { class: bonusClass, label } = getBonusType(rowIndex, colIndex);
          const classes = ['cell', bonusClass];
          if (cell) classes.push('filled');
          if (isNew) classes.push('new');
          if (isNew && castMode) classes.push('cast');

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => selectedTile && onPlaceLetter(rowIndex, colIndex, selectedTile)}
              className={classes.join(' ')}
              title={label}
            >
              {cell || label}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameBoard;