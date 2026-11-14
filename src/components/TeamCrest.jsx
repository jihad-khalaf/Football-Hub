import React from 'react';
import { teams } from '../data/teams';

// Shows one club crest. PROPS:
//   team    - the team id, e.g. 'real-madrid' (looked up in data/teams.js)
//   size    - width and height in pixels (default 28)
//   onPhoto - true when the crest sits on a dark photo, so a white crest stays white
const TeamCrest = ({ team, size = 28, onPhoto = false }) => {
  const club = teams[team];

  let className = 'crest';
  if (club.whiteCrest && !onPhoto) {
    className = 'crest white-crest';
  }

  return <img className={className} src={club.logo} alt={club.name + ' crest'} width={size} height={size} />;
};

export default TeamCrest;
