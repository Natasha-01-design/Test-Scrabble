import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Player from "./Components/Player.jsx"
import ScrabbleBoard from "./Components/ScrabbleBoard.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  <StrictMode>
  <ScrabbleBoard/>
    <Player />
  </StrictMode>,
)
