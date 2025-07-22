import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameBoard from './components/GameBoard.jsx'
import PlayerPanel from './components/PlayerPanel.jsx'
import SpellGridScrabble from './Scrabble.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpellGridScrabble/>
  </StrictMode>,
)