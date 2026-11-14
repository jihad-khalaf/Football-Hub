import React, { useState, useEffect } from 'react';
import TeamCrest from '../components/TeamCrest';
import MatchRow from '../components/MatchRow';
import StandingsTable from '../components/StandingsTable';
import { teams } from '../data/teams';
import { featuredMatch, matchPreview, headToHead, results, fixtures } from '../data/matches';
import heroPhoto from '../assets/photos/bernabeu-wide.jpg';
import '../styles/Matches.css';

// the competitions a visitor can filter by
const competitions = ['All', 'La Liga', 'Bundesliga', 'Champions League'];

const Matches = () => {
  // HOOK: which list is shown, 'results' or 'fixtures'
  const [tab, setTab] = useState('results');
  // HOOK: which competition is shown ('All' shows every match)
  const [competition, setCompetition] = useState('All');

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // pick the list for the chosen tab, then keep only the chosen competition
  const list = tab === 'results' ? results : fixtures;
  const shown = list.filter((match) => competition === 'All' || match.competition === competition);

  const home = teams[featuredMatch.home];
  const away = teams[featuredMatch.away];

  return (
    <div className="matches">
      {/* ---------- match preview on a stadium photo ---------- */}
      <div className="preview" style={{ backgroundImage: `url(${heroPhoto})` }}>
        <div className="container">
          <p className="preview-label"> Match preview · {featuredMatch.competition} · {featuredMatch.round} </p>

          <div className="preview-teams">
            <div>
              <TeamCrest team={featuredMatch.home} size={96} onPhoto={true} />
              <h1 className="display"> {home.name} </h1>
            </div>
            <span className="display"> vs </span>
            <div>
              <TeamCrest team={featuredMatch.away} size={96} onPhoto={true} />
              <h1 className="display"> {away.name} </h1>
            </div>
          </div>

          <p className="preview-facts">
            {featuredMatch.date} · {featuredMatch.kickoff} · {featuredMatch.stadium}
          </p>
        </div>
      </div>

      {/* ---------- preview text and the last five meetings ---------- */}
      <div className="preview-columns container">
        <div>
          <h2 className="section-title display"> The preview </h2>
          <p className="preview-text"> {matchPreview} </p>
        </div>

        <div>
          <h2 className="section-title display"> Last five meetings </h2>
          <div className="h2h">
            {headToHead.map((game) => (
              <div className="h2h-row" key={game.id}>
                <span> {game.date} </span>
                <b> {teams[game.home].name} {game.homeGoals} – {game.awayGoals} {teams[game.away].name} </b>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- results and fixtures ---------- */}
      <div className="match-list container">
        <div className="section-head">
          <h2 className="section-title display"> {tab === 'results' ? 'Results' : 'Fixtures'} </h2>

          {/* two buttons that switch the tab; the active one gets the class "active" */}
          <div className="tabs">
            <button className={tab === 'results' ? 'active' : ''} onClick={() => setTab('results')}> Results </button>
            <button className={tab === 'fixtures' ? 'active' : ''} onClick={() => setTab('fixtures')}> Fixtures </button>
          </div>
        </div>

        {/* one button per competition */}
        <div className="filters">
          {competitions.map((c) => (
            <button key={c} className={competition === c ? 'active' : ''} onClick={() => setCompetition(c)}>
              {c}
            </button>
          ))}
        </div>

        {shown.map((match) => (
          <MatchRow key={match.id} match={match} />
        ))}

        {shown.length === 0 && <p className="no-matches"> No matches in this competition. </p>}
      </div>

      {/* ---------- the league table (same component as on the Home page) ---------- */}
      <div className="matches-table container">
        <StandingsTable />
        <p className="sample-note"> Scores, fixtures and the table are sample data made for this project. </p>
      </div>
    </div>
  );
};

export default Matches;
