import React from "react";
import "./ScrabbleBoard.css";

const BOARD_SIZE = 15;

// Mapping of bonus square to theme
const THEMED_BONUSES = {
  TW: "Cybertron",     // Triple Word
  DW: "Autobot",       // Double Word
  TL: "Decepticon",    // Triple Letter
  DL: "Energon",       // Double Letter
  "": "",              // Empty
};

const BONUS_TEMPLATE = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
];

function ScrabbleBoard() {
  return (
    <div className="board">
      {BONUS_TEMPLATE.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const theme = THEMED_BONUSES[cell];
          return (
            <div key={`${rowIndex}-${colIndex}`} className={`cell ${cell}`}>
              {theme}
            </div>
          );
        })
      )}
    </div>
  );
}

export default ScrabbleBoard;
