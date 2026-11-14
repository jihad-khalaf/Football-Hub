import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeamCrest from '../components/TeamCrest';
import Lineup from '../components/Lineup';
import TrophyItem from '../components/TrophyItem';
import { clubs } from '../data/clubs';
import { realMadrid } from '../data/realMadrid';
import { barcelona } from '../data/barcelona';
import { bayernMunich } from '../data/bayernMunich';
import { juventus } from '../data/juventus';
import '../styles/Club.css';

// the detailed data for each club, looked up by the club id
const clubDetails = {
  'real-madrid': realMadrid,
  barcelona: barcelona,
  'bayern-munich': bayernMunich,
  juventus: juventus,
};

// DYNAMIC PAGE: one component for every club.
// The route is /clubs/:id, so /clubs/real-madrid and /clubs/juventus both open this page.
const Club = () => {
  // HOOK: useParams reads the ":id" part of the URL, e.g. 'real-madrid'
  const { id } = useParams();

  // HOOK: React Router keeps the old scroll position when the page changes,
  // so jump back to the top every time the club id in the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // find the club with that id in the array
  const club = clubs.find((c) => c.id === id);
  const details = clubDetails[id];

  // unknown club, or a club whose page is not written yet
  if (!club || !details) {
    return (
      <div className="club-missing container">
        <h1 className="display"> {club ? club.name : 'Club not found'} </h1>
        <p> {club ? 'This club page is being built.' : 'There is no club with this address.'} </p>
        <Link to="/" className="btn"> Back to Home </Link>
      </div>
    );
  }

  return (
    // the club's own colour is passed to CSS as a variable, so Club.css can use var(--club)
    <div className="club-page" style={{ '--club': club.color }}>

      {/* ---------- top banner ---------- */}
      <div className="club-hero" style={{ backgroundImage: `url(${club.photo})` }}>
        <div className="club-hero-content container">
          <TeamCrest team={club.id} size={104} onPhoto={true} />
          <div>
            <h1 className="display"> {club.name} </h1>
            <p> {details.intro} </p>
          </div>
        </div>
      </div>

      <div className="club-facts">
        <div className="club-facts-row container">
          {details.facts.map((fact) => (
            <div key={fact.label}>
              <span> {fact.label} </span>
              <b> {fact.value} </b>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- starting eleven and coach ---------- */}
      <div className="club-section container">
        <div className="section-head">
          <h2 className="section-title display"> Starting eleven </h2>
          <span className="club-formation display"> {details.formation} </span>
        </div>

        <div className="lineup-columns">
          <Lineup rows={details.lineup} />

          <div className="coach">
            {/* some coach photos are cut-outs (shown whole), others are normal photos (cropped to fill) */}
            <img src={details.coach.photo} alt={details.coach.name} style={{ objectFit: details.coach.fit }} />
            <span> {details.coach.role} </span>
            <h3 className="display"> {details.coach.name} </h3>
            <p> {details.lineupNote} </p>
          </div>
        </div>
      </div>

      {/* ---------- trophies ---------- */}
      <div className="club-section container">
        <h2 className="section-title display"> Trophy cabinet </h2>
        <div className="trophies">
          {details.trophies.map((trophy) => (
            <TrophyItem key={trophy.name} image={trophy.image} count={trophy.count} name={trophy.name} />
          ))}
        </div>
      </div>

      {/* ---------- stadium ---------- */}
      <div className="club-section container">
        <h2 className="section-title display"> The stadium </h2>
        <div className="stadium">
          <img src={details.stadium.photo} alt={details.stadium.name} />
          <div className="stadium-text">
            <h3 className="display"> {details.stadium.name} </h3>
            <p> {details.stadium.text} </p>
            <div className="stadium-facts">
              {details.stadium.facts.map((fact) => (
                <div key={fact.label}>
                  <span> {fact.label} </span>
                  <b> {fact.value} </b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- history ---------- */}
      <div className="club-section container">
        <h2 className="section-title display"> History </h2>
        <div className="history">
          {details.history.map((event) => (
            <div className="history-item" key={event.year}>
              <b className="display"> {event.year} </b>
              <div>
                <h3> {event.title} </h3>
                <p> {event.text} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- legends ---------- */}
      <div className="club-section container">
        <h2 className="section-title display"> Legends </h2>
        <div className="legends">
          {details.legends.map((legend) => (
            <div className="legend" key={legend.name}>
              <img src={legend.photo} alt={legend.name} />
              <span> {legend.years} </span>
              <h3 className="display"> {legend.name} </h3>
              <p> {legend.note} </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- rivalries ---------- */}
      <div className="club-section container">
        <h2 className="section-title display"> Rivalries </h2>
        <div className="rivalries">
          {details.rivalries.map((rivalry) => (
            <div className="rivalry" key={rivalry.name}>
              <span> Against {rivalry.against} </span>
              <h3 className="display"> {rivalry.name} </h3>
              <p> {rivalry.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Club;
