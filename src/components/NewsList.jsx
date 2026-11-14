import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';
import '../styles/News.css';

// The latest news: the first story is shown big with its photo,
// the other stories are a simple list under it.
const NewsList = () => {
  const lead = news[0];
  const otherStories = news.slice(1);

  return (
    <div className="news">
      <div className="section-head">
        <h2 className="section-title display"> Latest </h2>
        <Link to="/news" className="section-link"> All news </Link>
      </div>

      <Link to="/news" className="news-lead">
        <div className="news-photo">
          <img src={lead.photo} alt={lead.photoAlt} />
        </div>
        <span className="news-category">{lead.category}</span>
        <h3>{lead.title}</h3>
      </Link>

      {otherStories.map((story) => (
        <Link to="/news" className="news-item" key={story.id}>
          <span className="news-category">{story.category}</span>
          <h3>{story.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
