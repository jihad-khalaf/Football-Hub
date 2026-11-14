import React from 'react';
import { Link } from 'react-router-dom';
import TeamCrest from './TeamCrest';
import { teams } from '../data/teams';
import '../styles/Scores.css';

// One match box. PROPS: the whole match object from data/matches.js
const ScoreItem = ({ match }) => {
  return (
    <Link to="/matches" className="score-item">
      {/* a live match gets the extra class "live" (amber text and a dot) */}
      <span className={match.status === 'live' ? 'score-status live' : 'score-status'}>
        {match.label}
      </span>

      <div className="score-team">
        <TeamCrest team={match.home} size={24} />
        <span>{teams[match.home].name}</span>
        <b className="display">{match.homeGoals}</b>
      </div>

      <div className="score-team">
        <TeamCrest team={match.away} size={24} />
        <span>{teams[match.away].name}</span>
        <b className="display">{match.awayGoals}</b>
      </div>
    </Link>
  );
};

export default ScoreItem;
