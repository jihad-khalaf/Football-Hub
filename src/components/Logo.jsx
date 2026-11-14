import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.css';

// The Football Hub logo: a centre circle with the halfway line, drawn as an SVG,
// next to the name. Clicking it goes back to the Home page.
const Logo = () => {
  return (
    <Link to="/" className="logo">
      <svg className="logo-mark" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="5" />
        <path d="M32 3v58" stroke="currentColor" strokeWidth="5" />
        <circle cx="32" cy="32" r="6" fill="currentColor" />
      </svg>
      <span className="logo-name display">
        Football <span>Hub</span>
      </span>
    </Link>
  );
};

export default Logo;
