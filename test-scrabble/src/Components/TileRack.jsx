import React from 'react';


function TileRack({ tiles, onTileClick }){
    return (
        <div className="tile-rack">
    {tiles.map((tile, i) => (
      <div key={i} className="tile" onClick={() => onTileClick(tile)}>
        {tile.letter}
      </div>
    ))}
  </div>
    )
}


export default TileRack;