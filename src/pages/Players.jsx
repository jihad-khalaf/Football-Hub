import React, { useState, useEffect } from 'react';
import TeamCrest from '../components/TeamCrest';
import { players } from '../data/players';
import { clubs } from '../data/clubs';
import { teams } from '../data/teams';
import '../styles/Players.css';

// the columns that can be sorted: the key in the player object, and the heading
const sortColumns = [
  { key: 'apps', label: 'Apps' },
  { key: 'goals', label: 'Goals' },
  { key: 'assists', label: 'Assists' },
];

const Players = () => {
  // HOOK: the text typed in the search box
  const [search, setSearch] = useState('');
  // HOOK: the chosen club ('all' shows every club)
  const [club, setClub] = useState('all');
  // HOOK: the column the table is sorted by
  const [sortBy, setSortBy] = useState('goals');

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1) FILTER: keep players whose name contains the search text and who play for the chosen club
  const filtered = players.filter((p) => {
    const nameMatches = p.name.toLowerCase().includes(search.toLowerCase());
    const clubMatches = club === 'all' || p.club === club;
    return nameMatches && clubMatches;
  });

  // 2) SORT a COPY ([...]) so the original array is not changed; highest number first
  const sorted = [...filtered].sort((a, b) => b[sortBy] - a[sortBy]);

  // the top scorer and top assister of ALL players, for the two big panels
  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];
  const topAssister = [...players].sort((a, b) => b.assists - a.assists)[0];

  return (
    <div className="players container">
      <h1 className="display"> Players </h1>
      <p className="players-intro">
        Goals and assists in all competitions for the leading players of our four clubs.
        Search by name, pick a club, and click a column to sort.
      </p>

      {/* ---------- the two leaders ---------- */}
      <div className="leaders">
        {[
          { title: 'Top scorer', player: topScorer, number: topScorer.goals, unit: 'goals' },
          { title: 'Most assists', player: topAssister, number: topAssister.assists, unit: 'assists' },
        ].map((leader) => (
          <div className="leader" key={leader.title}>
            <img src={leader.player.photo} alt={leader.player.name} />
            <div className="leader-text">
              <span> {leader.title} </span>
              <h2 className="display"> {leader.player.name} </h2>
              <p> {teams[leader.player.club].name} </p>
              <b className="display"> {leader.number} <small> {leader.unit} </small> </b>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- search and club filter (controlled inputs) ---------- */}
      <div className="player-tools">
        <input type="text" placeholder="Search a player" value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <select value={club} onChange={(e) => setClub(e.target.value)}>
          <option value="all"> All clubs </option>
          {clubs.map((c) => (
            <option key={c.id} value={c.id}> {c.name} </option>
          ))}
        </select>
      </div>

      {/* ---------- the table ---------- */}
      <div className="table-scroll">
        <table className="player-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Club</th>
              {/* each sortable heading is a button; the active one is amber */}
              {sortColumns.map((col) => (
                <th key={col.key}>
                  <button className={sortBy === col.key ? 'active' : ''} onClick={() => setSortBy(col.key)}>
                    {col.label} {sortBy === col.key && '↓'}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, index) => (
              <tr key={p.id}>
                <td className="rank"> {index + 1} </td>
                <td>
                  <div className="player-cell">
                    <img src={p.photo} alt={p.name} />
                    <div>
                      <b> {p.name} </b>
                      <span> {p.position} </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="club-cell">
                    <TeamCrest team={p.club} size={24} />
                    {/* the club name is hidden on phones (Players.css), only the crest stays */}
                    <span> {teams[p.club].name} </span>
                  </div>
                </td>
                <td className={sortBy === 'apps' ? 'num active' : 'num'}> {p.apps} </td>
                <td className={sortBy === 'goals' ? 'num active' : 'num'}> {p.goals} </td>
                <td className={sortBy === 'assists' ? 'num active' : 'num'}> {p.assists} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sorted.length === 0 && <p className="no-players"> No player matches your search. </p>}

      <p className="sample-note"> Stats are sample data made for this project. </p>
    </div>
  );
};

export default Players;
