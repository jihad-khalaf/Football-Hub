import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ComingSoon.css';

// Temporary page shown for links whose page is not built yet.
const ComingSoon = () => {
  // HOOK: start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coming-soon container">
      <h1 className="display"> This page is next </h1>
      <p> We are building the site one page at a time. The Home page is ready to look at. </p>
      <Link to="/" className="btn"> Back to Home </Link>
    </div>
  );
};

export default ComingSoon;
