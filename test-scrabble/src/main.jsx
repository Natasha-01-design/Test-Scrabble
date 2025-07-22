import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TurnManager from './Components/TurnManagement'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <TurnManager />
  </StrictMode>,
)
