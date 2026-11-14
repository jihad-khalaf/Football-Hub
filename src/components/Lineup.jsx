import React from 'react';
import PlayerItem from './PlayerItem';
import '../styles/Lineup.css';

// The starting eleven drawn on a football pitch.
// PROPS: rows = an array of rows, and each row is an array of players.
// So there are two maps: the outer one makes the rows, the inner one the players.
const Lineup = ({ rows }) => {
  return (
    <div className="pitch">
      {/* pitch markings, drawn with CSS only */}
      <div className="pitch-halfway"></div>
      <div className="pitch-circle"></div>
      <div className="pitch-box"></div>

      {rows.map((row, index) => (
        <div className="pitch-row" key={index}>
          {row.map((player) => (
            <PlayerItem key={player.name} name={player.name} position={player.position} photo={player.photo} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lineup;
