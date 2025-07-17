import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Player from "./Components/Player.jsx"
import ScrabbleBoard from "./Components/ScrabbleBoard.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ScrabbleBoard/>
    <Player />
  </StrictMode>,
)
