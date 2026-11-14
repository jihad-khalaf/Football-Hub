import React from 'react';
import TeamCrest from './TeamCrest';
import { teams } from '../data/teams';
import '../styles/MatchRow.css';

// One match in a list. PROPS: the match object from data/matches.js.
// A finished match has goals; a fixture has a kick-off time instead.
const MatchRow = ({ match }) => {
  // true when the match has a score (a result), false for a fixture
  const finished = match.homeGoals !== undefined;

  return (
    <div className="match-row">
      <div className="match-when">
        <b> {match.date} </b>
        <span> {match.competition} </span>
      </div>

      <div className="match-teams">
        <div className="match-team home">
          <span> {teams[match.home].name} </span>
          <TeamCrest team={match.home} size={32} />
        </div>

        {/* the score, or the kick-off time when the match is not played yet */}
        {finished ? (
          <b className="match-score display"> {match.homeGoals} – {match.awayGoals} </b>
        ) : (
          <b className="match-time"> {match.kickoff} </b>
        )}

        <div className="match-team">
          <TeamCrest team={match.away} size={32} />
          <span> {teams[match.away].name} </span>
        </div>
      </div>
    </div>
  );
};

export default MatchRow;
