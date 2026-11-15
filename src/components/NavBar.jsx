import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/NavBar.css';

// PROPS from App.js: the current theme word and the function that switches it
const NavBar = ({ theme, onToggleTheme }) => {
  // HOOK: is the mobile menu open? (true / false)
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-inner container">
        <Logo />

        {/* on a phone the links are hidden until the menu button is pressed */}
        <div className={open ? 'nav-links open' : 'nav-links'}>
          <Link to="/" onClick={closeMenu}> Home </Link>
          <Link to="/matches" onClick={closeMenu}> Matches </Link>
          <Link to="/players" onClick={closeMenu}> Players </Link>
          <Link to="/news" onClick={closeMenu}> News </Link>
          <Link to="/clubs" onClick={closeMenu}> Clubs </Link>
          <Link to="/features" onClick={closeMenu}> Features </Link>
          <Link to="/about" onClick={closeMenu}> About </Link>
          <Link to="/contact" onClick={closeMenu}> Contact </Link>
        </div>

        <div className="nav-buttons">
          {/* theme button: calls the function that lives in App.js */}
          <button type="button" className="icon-button theme-button" onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M5 5l1.500 1.500M17.500 17.500L19 19M2 12h2M20 12h2M5 19l1.500-1.500M17.500 6.500L19 5" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500z" />
              </svg>
            )}
          </button>

          {/* menu button: only visible on small screens (see NavBar.css) */}
          <button type="button" className="icon-button menu-button" onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
