import React from 'react';
import { Link } from 'react-router-dom';
import TeamCrest from './TeamCrest';
import { teams } from '../data/teams';
import { featuredMatch } from '../data/matches';
import heroPhoto from '../assets/photos/bernabeu-wide.jpg';
import '../styles/Hero.css';

// The big banner at the top of the Home page: the featured match on a stadium photo.
const Hero = () => {
  const home = teams[featuredMatch.home];
  const away = teams[featuredMatch.away];

  return (
    // the photo is a CSS background, set here because the image must be imported
    <div className="hero" style={{ backgroundImage: `url(${heroPhoto})` }}>
      <div className="hero-content container">
        <p className="hero-label">
          {featuredMatch.competition} · {featuredMatch.round}
        </p>

        <div className="hero-crests">
          <TeamCrest team={featuredMatch.home} size={80} onPhoto={true} />
          <span className="display"> vs </span>
          <TeamCrest team={featuredMatch.away} size={80} onPhoto={true} />
        </div>

        <h1 className="hero-title display">
          {home.name} <br />
          <span>vs</span> {away.name}
        </h1>

        <div className="hero-bottom">
          <div className="hero-facts">
            <div>
              <span>Date</span>
              <b>{featuredMatch.date}</b>
            </div>
            <div>
              <span>Kick-off</span>
              <b>{featuredMatch.kickoff}</b>
            </div>
            <div>
              <span>Stadium</span>
              <b>{featuredMatch.stadium}</b>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/matches" className="btn"> Match preview </Link>
            <Link to="/clubs/real-madrid" className="btn btn-outline"> Head to head </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
