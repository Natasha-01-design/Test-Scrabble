
const getNextPlayerIndex = (currentIndex, totalPlayers) => {
  return (currentIndex + 1) % totalPlayers;
};

function refillHand(player, tileBag) {
  const tilesNeeded = 7 - player.hand.length;
  const newTiles = tileBag.slice(0, tilesNeeded);
  const updatedHand = [...player.hand, ...newTiles];
  const updatedBag = tileBag.slice(tilesNeeded);
  return { updatedHand, updatedBag };
}

const TurnManager = ({ players, setPlayers, currentTurn, setCurrentTurn, tileBag, setTileBag }) => {
  const endTurn = () => {
    const { updatedPlayers, updatedBag } = players.reduce(
      (acc, player, index) => {
        if (index === currentTurn) {
          const { updatedHand, updatedBag } = refillHand(player, acc.updatedBag);
          acc.updatedPlayers.push({
            ...player,
            hand: updatedHand,
            isActive: false,
          });
          acc.updatedBag = updatedBag;
        } else {
          acc.updatedPlayers.push(player);
        }
        return acc;
      },
      { updatedPlayers: [], updatedBag: tileBag }
    );

    const nextIndex = getNextPlayerIndex(currentTurn, players.length);
    updatedPlayers[nextIndex].isActive = true;

    setPlayers(updatedPlayers);
    setTileBag(updatedBag);
    setCurrentTurn(nextIndex);
  };

  return (
    <div>
      <button>
      
        Pass
      </button>
    </div>
  );
};

export default TurnManager;
