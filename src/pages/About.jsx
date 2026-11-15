import React, { useState, useEffect } from 'react';
import { photoCredits, otherCredits } from '../data/credits';
import bannerPhoto from '../assets/photos/camp-nou-stand.jpg';
import '../styles/About.css';

// the two Web 1 projects the idea comes from
const oldProjects = [
  {
    name: 'Real Madrid React',
    author: 'Mohammad Al Ajouz',
    link: 'https://github.com/fox121212/real-madrid-react',
    text: 'One club in depth: squad, history, trophies, legends, stadium and rivalries. It became the club pages of Football Hub.',
  },
  {
    name: 'Kickoff',
    author: 'Jihad Khalaf',
    link: 'https://github.com/jihad-khalaf/kickoff-app',
    text: 'All of football at a glance: scores, standings, player stats and news. It became the hub pages of Football Hub.',
  },
];

// the two of us
const team = [
  { name: 'Mohammad Al Ajouz', github: 'fox121212' },
  { name: 'Jihad Khalaf', github: 'jihad-khalaf' },
];

const About = () => {
  // HOOK: true when the full list of photo credits is open
  const [showCredits, setShowCredits] = useState(false);

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      {/* ---------- banner ---------- */}
      <div className="about-banner" style={{ backgroundImage: `url(${bannerPhoto})` }}>
        <div className="container">
          <h1 className="display"> About </h1>
          <p> Football Hub is a student project for CSCI426, Advanced Web Programming. </p>
        </div>
      </div>

      {/* ---------- the idea ---------- */}
      <div className="about-section about-idea container">
        <div className="about-intro">
          <h2 className="section-title display"> The idea </h2>
          <p>
            Fans usually need one site for scores and another for club history and squads.
            Football Hub puts both in one place: the whole game at a glance, and four clubs in depth.
          </p>
          <p>
            The idea combines our two projects from Web Programming 1. Football Hub was built
            new from an empty folder; only the idea comes from these projects.
          </p>
        </div>

        <div className="old-projects">
          {oldProjects.map((project, index) => (
            <a className="old-project" key={project.name} href={project.link} target="_blank" rel="noreferrer">
              <span className="display"> 0{index + 1} </span>
              <h3 className="display"> {project.name} </h3>
              <p className="old-author"> by {project.author} </p>
              <p> {project.text} </p>
              <b> View on GitHub </b>
            </a>
          ))}
        </div>
      </div>

      {/* ---------- who we are ---------- */}
      <div className="about-section container">
        <h2 className="section-title display"> Who we are </h2>
        <div className="team">
          {team.map((person) => (
            <div className="person" key={person.github}>
              <h3 className="display"> {person.name} </h3>
              <p> Computer science student </p>
              <a href={'https://github.com/' + person.github} target="_blank" rel="noreferrer">
                github.com/{person.github}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- how it is built ---------- */}
      <div className="about-section container">
        <h2 className="section-title display"> How it is built </h2>
        <div className="built">
          <div>
            <b> React </b>
            <p> Components, props and hooks, created with Create React App. </p>
          </div>
          <div>
            <b> React Router </b>
            <p> One address per page, and one dynamic page for every club. </p>
          </div>
          <div>
            <b> Plain CSS </b>
            <p> One file per component, with a dark and a light theme. </p>
          </div>
          <div>
            <b> Sample data </b>
            <p> Scores, standings, stats and news are written for this project, not live. </p>
          </div>
        </div>
      </div>

      {/* ---------- credits ---------- */}
      <div className="about-section container">
        <div className="section-head">
          <h2 className="section-title display"> Image credits </h2>
          {/* <button className="credits-toggle" onClick={() => setShowCredits(!showCredits)}>
            {showCredits ? 'Hide photo list' : 'Show all photo credits'}
          </button> */}
        </div>

        <div className="other-credits">
          {otherCredits.map((credit) => (
            <div key={credit.title}>
              <b> {credit.title} </b>
              <p> {credit.text} </p>
            </div>
          ))}
          <div>
            <b> Photos </b>
            <p> From Wikimedia Commons, used under their Creative Commons licences. </p>
          </div>
        </div>

        {/* the long list only shows when the button has been clicked */}
        {showCredits && (
          <div className="credit-groups">
            {photoCredits.map((group) => (
              <div className="credit-group" key={group.group}>
                <h3> {group.group} </h3>
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>File on Wikimedia Commons</th>
                        <th>Author</th>
                        <th>Licence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item) => (
                        <tr key={item.file}>
                          <td>{item.file}</td>
                          <td>{item.author}</td>
                          <td>{item.licence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
