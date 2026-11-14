import React from 'react';
import '../styles/Lineup.css';

// One player on the pitch: round photo, name and position.
// PROPS: name, position (e.g. 'GK') and the imported photo
const PlayerItem = ({ name, position, photo }) => {
  return (
    <div className="player">
      <img src={photo} alt={name} />
      <b> {name} </b>
      <span> {position} </span>
    </div>
  );
};

export default PlayerItem;
