
import React from 'react';
import isWordValid from '../index';


function WordValidator({
  board, currentPlayer, setPlayers, currentPlayerIndex,
  setCurrentPlayerIndex, setWordScore, children
}){
    const playWord = () => {
    const formedWord = extractWord(board); 

    if (!isWordValid(formedWord)) {
      alert(`"${formedWord}" is not a valid word.`);
      return;
    }

    const points = Math.floor(Math.random() * 10) + 1; 
    setPlayers(prev => {
      const updated = [...prev];
      updated[currentPlayerIndex].score += points;
      return updated;
    });
    setWordScore(points);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
  };

  
  const extractWord = (board) => {
    const letters = [];
    for (let row of board) {
      for (let cell of row) {
        if (cell?.tile?.letter) letters.push(cell.tile.letter);
      }
    }
    return letters.join('');
  };
   return (
    <div>
        children({ playWord });
    </div>
   )
   

}

export default WordValidator

