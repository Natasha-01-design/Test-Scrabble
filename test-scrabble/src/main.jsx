

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PlayerInfoPanel } from './Components/PlayerInformation'; 
import { App } from './Components/PlayerInformation';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PlayerInfoPanel/>
  </React.StrictMode>
);