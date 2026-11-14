import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeamCrest from '../components/TeamCrest';
import { clubs } from '../data/clubs';
import { realMadrid } from '../data/realMadrid';
import { barcelona } from '../data/barcelona';
import { bayernMunich } from '../data/bayernMunich';
import { juventus } from '../data/juventus';
import '../styles/ClubsPage.css';

// the detailed data for each club, looked up by the club id (same as in Club.jsx)
const clubDetails = {
  'real-madrid': realMadrid,
  barcelona: barcelona,
  'bayern-munich': bayernMunich,
  juventus: juventus,
};

// The list of all clubs. Each row links to that club's page (/clubs/:id).
const Clubs = () => {
  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clubs-page">
      <div className="clubs-page-head container">
        <h1 className="display"> The clubs </h1>
        <p>
          Four of Europe's biggest clubs, each with its own full page: starting eleven and coach,
          trophy cabinet, stadium, history, legends and rivalries.
        </p>
      </div>

      {/* one row per club; CSS swaps the photo to the other side on every second row */}
      <div className="container">
        {clubs.map((club, index) => (
          <div className="club-row" key={club.id} style={{ '--club': club.color }}>
            <Link to={'/clubs/' + club.id} className="club-row-photo">
              <img src={club.photo} alt={club.photoAlt} style={{ objectPosition: club.photoPosition }} />
            </Link>

            <div className="club-row-text">
              <div className="club-row-top">
                <span className="display"> 0{index + 1} </span>
                <TeamCrest team={club.id} size={64} />
              </div>

              <h2 className="display"> {club.name} </h2>
              <p> {clubDetails[club.id].intro} </p>

              <div className="club-row-facts">
                {clubDetails[club.id].facts.map((fact) => (
                  <div key={fact.label}>
                    <span> {fact.label} </span>
                    <b> {fact.value} </b>
                  </div>
                ))}
              </div>

              <Link to={'/clubs/' + club.id} className="btn"> Open club page </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
