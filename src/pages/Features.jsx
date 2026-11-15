import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerPhoto from "../assets/photos/juventus-stadium.jpg";
import "../styles/Features.css";

// one object per feature; "link" is empty when the feature has no page of its own
const features = [
  {
    title: "Scores and fixtures",
    text: "Look back at recent results, check which matches are coming up, and follow the full league tables. Switch between results and fixtures with one click.",
    link: "/matches",
    linkText: "Open Matches",
  },
  {
    title: "Club guides",
    text: "Four clubs, each with its own page: the starting eleven and coach, the trophy cabinet, the stadium, the history, the legends and the big rivalries.",
    link: "/clubs",
    linkText: "Open Clubs",
  },
  {
    title: "Player stats",
    text: "A goals and assists table that you can sort by any column. Type a name in the search box to find a player straight away.",
    link: "/players",
    linkText: "Open Players",
  },
  {
    title: "News",
    text: "The latest stories in one place. Pick a category such as La Liga or Transfers and only the stories you care about stay on the page.",
    link: "/news",
    linkText: "Open News",
  },
  {
    title: "Dark and light mode",
    text: "Use the button in the menu bar to switch the whole site between a dark and a light look. The site remembers your choice the next time you visit.",
    link: "",
  },
  {
    title: "Works on any screen",
    text: "The layout adapts to a phone, a tablet or a desktop, so the pages stay easy to read and the menu stays easy to reach.",
    link: "",
  },
  {
    title: "Contact",
    text: "Found a mistake or have an idea? Send us a correction or a suggestion. Your messages are saved, so you can see what you sent.",
    link: "/contact",
    linkText: "Open Contact",
  },
];

const Features = () => {
  // HOOK: start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="features">
      {/* ---------- banner ---------- */}
      <div
        className="features-banner"
        style={{ backgroundImage: `url(${bannerPhoto})` }}
      >
        <div className="container">
          <h1 className="display"> Features </h1>
          <p> Everything Football Hub offers, and where to find it. </p>
        </div>
      </div>

      {/* ---------- one block per feature ---------- */}
      <div className="features-list container">
        {features.map((feature, index) => (
          <div className="feature" key={feature.title}>
            <span className="feature-number display"> 0{index + 1} </span>
            <h2 className="display"> {feature.title} </h2>
            <p> {feature.text} </p>
            {/* only features with a page get a link */}
            {feature.link && (
              <Link to={feature.link} className="feature-link">
                {" "}
                {feature.linkText}{" "}
              </Link>
            )}
          </div>
        ))}
      </div>

      <p className="features-note container">
        Scores, standings and news are sample data made for this project.
      </p>
    </div>
  );
};

export default Features;
