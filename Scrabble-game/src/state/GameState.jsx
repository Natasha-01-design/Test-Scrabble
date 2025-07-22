import { useState, useRef, useEffect } from 'react';
import { createBoard, letterScores, initialLetterBag, drawLetters } from './gameUtils';

const initialPlayers = [
  { name: 'Raiden', style: 'Thunder Shinobi', score: 0, hand: [], isActive: true, avatar: '/Levi Ackerman.jpeg' },
  { name: 'Levi', style: 'Titan Slayer', score: 0, hand: [], isActive: false, avatar: '/90fc20a1-efa6-4829-8a03-1b9cc567e29c.jpeg' },
];

export const useGameState = () => {
  const [board, setBoard] = useState(createBoard());
  const [players, setPlayers] = useState(initialPlayers);
  const [letterBag, setLetterBag] = useState(initialLetterBag());
  const [turnIndex, setTurnIndex] = useState(0);
  const [selectedTile, setSelectedTile] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const introMusic = useRef(null);
  const victoryMusic = useRef(null);

  useEffect(() => {
    const updatedPlayers = players.map(p => {
      const { drawn, newBag } = drawLetters(letterBag, 7);
      setLetterBag(newBag);
      return { ...p, hand: drawn };
    });
    setPlayers(updatedPlayers);
  }, []);

  const activePlayer = players[turnIndex];

  const placeLetter = (row, col, letter) => {
    if (board[row][col] !== '') return;

    const updatedBoard = board.map(r => [...r]);
    updatedBoard[row][col] = letter;

    const points = letterScores[letter] || 0;

    const updatedHand = [...activePlayer.hand];
    const letterIndex = updatedHand.indexOf(letter);
    if (letterIndex !== -1) updatedHand.splice(letterIndex, 1);

    const { drawn, newBag } = drawLetters(letterBag, 1);
    const newHand = [...updatedHand, ...drawn];

    const updatedPlayers = players.map((p, i) =>
      i === turnIndex
        ? { ...p, hand: newHand, score: p.score + points }
        : p
    );

    setBoard(updatedBoard);
    setPlayers(updatedPlayers);
    setLetterBag(newBag);
    setSelectedTile(null);

    const isGameOver = updatedPlayers.every(p => p.hand.length === 0) && newBag.length === 0;
    if (isGameOver) {
      setGameOver(true);
      if (victoryMusic.current) victoryMusic.current.play();
    }
  };

  const nextTurn = () => {
    const next = (turnIndex + 1) % players.length;
    const updatedPlayers = players.map((p, i) => ({ ...p, isActive: i === next }));
    setPlayers(updatedPlayers);
    setTurnIndex(next);
  };

  const submitWord = () => {
    console.log("submitWord triggered!");
    nextTurn();
  };

  return {
    board,
    players,
    letterBag,
    activePlayer,
    turnIndex,
    selectedTile,
    setSelectedTile,
    gameOver,
    placeLetter,
    nextTurn,
    introMusic,
    victoryMusic,
    submitWord
  };
};
