import React from 'react';
import { Link } from 'react-router-dom';
import TeamCrest from './TeamCrest';
import '../styles/Clubs.css';

// One tall club tile with the stadium photo behind the club name.
// PROPS: the whole club object from data/clubs.js
const ClubCard = ({ club }) => {
  return (
    <Link to={'/clubs/' + club.id} className="club-card">
      {/* the photo is a CSS background; each club can set where the photo is cropped */}
      <div className="club-photo"
        style={{ backgroundImage: `url(${club.photo})`, backgroundPosition: club.photoPosition }}>
      </div>

      {/* the line under the tile uses the club's own colour */}
      <div className="club-info" style={{ borderColor: club.color }}>
        <div>
          <h3 className="display"> {club.name} </h3>
          <p> {club.city} · Founded {club.founded} </p>
        </div>
        <TeamCrest team={club.id} size={56} onPhoto={true} />
      </div>
    </Link>
  );
};

export default ClubCard;
