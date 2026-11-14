import React from 'react';
import Hero from '../components/Hero';
import ScoreItem from '../components/ScoreItem';
import ClubCard from '../components/ClubCard';
import StandingsTable from '../components/StandingsTable';
import NewsList from '../components/NewsList';
import { todaysScores } from '../data/matches';
import { clubs } from '../data/clubs';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />

      {/* today's scores: one ScoreItem per match in the array */}
      <div className="scores">
        <div className="scores-row container">
          {todaysScores.map((match) => (
            <ScoreItem key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* the four clubs: one ClubCard per club in the array */}
      <div className="clubs container">
        <div className="clubs-head">
          <h2 className="display"> Inside the clubs </h2>
          <p>
            Starting eleven and coach, history, honours, legends, stadium and rivalries.
            One full section per club.
          </p>
        </div>
        <div className="clubs-grid">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </div>

      {/* table on the left, news on the right */}
      <div className="home-columns container">
        <StandingsTable />
        <NewsList />
      </div>
    </div>
  );
};

export default Home;
