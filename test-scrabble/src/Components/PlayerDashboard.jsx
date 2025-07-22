// import React from 'react';

// const PlayerDashboard = ({ players, currentPlayerIndex }) => {
//   return (
//     <div>
//       {players.map((player, index) => (
//         <div key={index}>
//           <h3>{player.name}</h3>
//           <p>Score: {player.score}</p>
//           <p>
//             Hand:{' '}
//             {player.hand.length > 0
//               ? player.hand.map((tile, i) => (
//                   <span key={i}>{tile} </span>
//                 ))
//               : 'No tiles'}
//           </p>
//           {index === currentPlayerIndex && <p>It's your turn!</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlayerDashboard;