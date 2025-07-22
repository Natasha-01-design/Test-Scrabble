import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TurnManagement from './Components/TurnManagement'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <TurnManagement />
  </StrictMode>,
)
