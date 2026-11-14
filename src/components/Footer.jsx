import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner container">
        <p> Football Hub · CSCI426 project </p>
        <p className="footer-credits">
          Club crests belong to their clubs. Photos are from Wikimedia Commons under Creative
          Commons licences. <Link to="/about"> Full credits </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
