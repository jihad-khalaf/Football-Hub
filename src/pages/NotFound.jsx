import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerPhoto from '../assets/photos/bernabeu-pitch.jpg';
import '../styles/NotFound.css';

// Shown for any address that does not exist (the "*" route in App.js).
const NotFound = () => {
  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found" style={{ backgroundImage: `url(${bannerPhoto})` }}>
      <div className="container">
        <span className="display"> Error 404 </span>
        <h1 className="display"> Offside </h1>
        <p> The page you are looking for does not exist, or it has moved. </p>
        <div className="not-found-links">
          <Link to="/" className="btn"> Back to Home </Link>
          <Link to="/clubs" className="btn btn-outline"> See the clubs </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
