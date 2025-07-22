
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Player from "./Components/Player.jsx"
import ScrabbleBoard from "./Components/ScrabbleBoard.jsx"
import './index.css'
import App from './App.jsx'
import { PlayerInfoPanel } from './Components/PlayerInformation'; 
import { App } from './Components/PlayerInformation';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  <ScrabbleBoard/>
  <PlayerInfoPanel/>
  </StrictMode>,
)

