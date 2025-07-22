import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './Components/GamePage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<GamePage />} />
    </Routes>
  </Router>
);

export default App;