import React, { useState, useEffect } from 'react';
import { news } from '../data/news';
import '../styles/NewsPage.css';

// the category buttons; 'All' shows every story
const categories = ['All', 'Champions League', 'La Liga', 'Bundesliga', 'Serie A', 'Transfers', 'Players'];

const News = () => {
  // HOOK: the chosen category
  const [category, setCategory] = useState('All');
  // HOOK: the id of the story that is open (shows its full text); '' = none
  const [openId, setOpenId] = useState('');

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // keep only the stories in the chosen category
  const shown = news.filter((story) => category === 'All' || story.category === category);

  // open a story, or close it if it is already open
  const toggleStory = (id) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <div className="news-page container">
      <h1 className="display"> News </h1>

      {/* one button per category; the chosen one is amber */}
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>

      {/* the first story in the list is shown big, the rest in a grid (CSS does this) */}
      <div className="stories">
        {shown.map((story) => (
          <article className="story" key={story.id}>
            <div className="story-photo">
              <img src={story.photo} alt={story.photoAlt} />
            </div>

            <div className="story-text">
              <span className="story-meta"> {story.category} · {story.date} </span>
              <h2> {story.title} </h2>
              <p> {story.summary} </p>

              {/* the full text only shows for the open story */}
              {openId === story.id && <p className="story-body"> {story.body} </p>}

              <button className="story-toggle" onClick={() => toggleStory(story.id)}>
                {openId === story.id ? 'Show less' : 'Read more'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {shown.length === 0 && <p className="no-stories"> No stories in this category yet. </p>}

      <p className="sample-note"> These stories are sample news written for this project. </p>
    </div>
  );
};

export default News;
