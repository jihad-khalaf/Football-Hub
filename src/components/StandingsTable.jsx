import React from 'react';
import { Link } from 'react-router-dom';
import TeamCrest from './TeamCrest';
import { teams } from '../data/teams';
import { laLigaStandings } from '../data/standings';
import '../styles/Standings.css';

// The league table. Played and points are CALCULATED from won / drawn / lost,
// so the numbers can never disagree with each other.
const StandingsTable = () => {
  return (
    <div className="standings">
      <div className="section-head">
        <h2 className="section-title display"> La Liga standings </h2>
        <Link to="/matches" className="section-link"> Full table </Link>
      </div>

      {/* this box lets the table scroll sideways on a narrow phone */}
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Club</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {laLigaStandings.map((row, index) => (
              <tr key={row.team}>
                {/* the top 4 places go to the Champions League, so they are amber */}
                <td className={index < 4 ? 'position top' : 'position'}>{index + 1}</td>
                <td>
                  <div className="table-club">
                    <TeamCrest team={row.team} size={24} />
                    {teams[row.team].name}
                  </div>
                </td>
                <td>{row.won + row.drawn + row.lost}</td>
                <td>{row.won}</td>
                <td>{row.drawn}</td>
                <td>{row.lost}</td>
                <td>{row.goalDifference > 0 ? '+' + row.goalDifference : row.goalDifference}</td>
                <td className="points">{row.won * 3 + row.drawn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="table-note"> Champions League places </p>
    </div>
  );
};

export default StandingsTable;
