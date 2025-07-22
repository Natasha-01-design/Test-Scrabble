import React, { useEffect, useState } from 'react';
import './ScoreBoard.css';

const tips = [
  "Play wisely , your tiles are limited.",
  "Watch the timer! Every second counts.",
  "Combo spells score higher!",
  "Diversify your words – avoid repeats.",
  "Dominate the board, control the realm."
];

const ScoreBoard = ({ players, currentTurn, nextTurn, isPaused = false }) => {
  const [timer, setTimer] = useState(60);
  const [lastScores, setLastScores] = useState(players.map(p => p.score));
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    setTimer(60);
    setTipIndex((prev) => (prev + 1) % tips.length);
    setLastScores(players.map(p => p.score));
  }, [currentTurn]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          nextTurn();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, currentTurn]);

  const getTimerColor = () => {
    if (timer <= 10) return 'red';
    if (timer <= 20) return 'orange';
    return '#6b3e00';
  };

  const topScore = Math.max(...players.map(p => p.score));
  const totalWords = players.reduce((sum, p) => sum + (p.wordsPlayed?.length || 0), 0);
  const averageScore = Math.round(players.reduce((sum, p) => sum + p.score, 0) / players.length);

  const getBadge = (p) => {
    if (p.score === topScore) return '🏅 High Scorer';
    if ((p.wordsPlayed?.length || 0) > 5) return '📖 Word Master';
    if ((p.streak || 0) >= 3) return '🔥 On Fire';
    return '✨ Challenger';
  };

  return (
    <div className="score-board full-height">
      <div className="announcer-bar">
        🔊 {players[currentTurn]?.name.toUpperCase()} is Playing!
      </div>

      <div className="score-banner">Battle of the Realms</div>

      <div className="timer" style={{ color: getTimerColor() }}>
        ⏱ <strong>{timer}s</strong> left
      </div>

      <div className="turn-tip">💬 {tips[tipIndex]}</div>

      <h2>Standings</h2>
      <div className="score-scroll">
        {players.map((p, i) => {
          const scoreTrend = p.score - lastScores[i];
          const isMVP = p.score === topScore;

          return (
            <div
              key={p.name}
              className={`player-card ${i === currentTurn ? 'active mk-style pulse' : ''} ${isMVP ? 'mvp-glow' : ''}`}
            >
              {isMVP && <div className="crown">👑</div>}
              <div className="rank-badge">#{i + 1}</div>
              <img src={p.avatar} alt={p.name} />
              <div className="player-info">
                <strong>{p.name}</strong> <br />
                <span>{p.style}</span>
                <div className="mini-stats">
                 Tiles: {p.tiles?.length || 7} <br />
                  Words: {p.wordsPlayed?.length || 0} <br />
                  Streak: {p.streak || 0}
                </div>
              </div>
              <div className="player-score">
                {p.score} pts
                {scoreTrend !== 0 && (
                  <span className={`trend ${scoreTrend > 0 ? 'up' : 'down'}`}>
                    {scoreTrend > 0 ? ` ↑ +${scoreTrend}` : ` ↓ ${scoreTrend}`}
                  </span>
                )}
                <div className="badge">{getBadge(p)}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="score-footer extended">
        <div className="stat-bar">⚔️ Total Spells Cast: <strong>{totalWords}</strong></div>
        <div className="stat-bar">🧠 Average Score: <strong>{averageScore}</strong></div>
        <div className="stat-bar">🔮 Active Realm: <strong>{players[currentTurn]?.style || 'Mystic'}</strong></div>
      </div>
    </div>
  );
};

export default ScoreBoard;
