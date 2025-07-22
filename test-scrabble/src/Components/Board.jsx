import React from 'react';

function Board({ board, onCellClick }){
    return (
        <div className="board">
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`cell ${cell.bonus || ''}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
          >
            {cell.tile?.letter}
          </div>
        ))}
      </div>
    ))}
  </div>
    )
}

export default Board;
