function PlayerCard({ player, isActive, onSelectLetter, selectedLetter }) {
  return (
    <div className={`player-card ${isActive ? 'active' : ''}`}>
      <h3>{player.name}</h3>
      <p>Score: <strong>{player.score}</strong></p>

      <div className="player-hand">
        {(player.hand || []).map((letter, index) => (
          <button
            key={index}
            className={`letter-tile ${letter === selectedLetter ? 'selected' : ''}`}
            onClick={() => isActive && onSelectLetter(letter)}
            disabled={!isActive}
            aria-label={`Letter ${letter}`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PlayerInfoPanel({
  players = [], 
  currentPlayerIndex,
  selectedLetter,
  onSelectLetter
}) {
  return (
    <div className="player-info-panel">
      <h2>Players</h2>
      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        players.map((player, index) => (
          <PlayerCard
            key={index}
            player={player}
            isActive={index === currentPlayerIndex}
            selectedLetter={selectedLetter}
            onSelectLetter={onSelectLetter}
          />
        ))
      )}
    </div>
  );
}

