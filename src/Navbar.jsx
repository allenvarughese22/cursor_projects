import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './design-system.css';

const Navbar = () => {
  return (
    <nav className="navbar-tesla" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div 
          className="nav-brand font-display" 
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
        >
          <Link to="/">AV</Link>
        </div>
        <ul className="nav-links">
          <li><Link to={{ pathname: '/', search: '?section=what-i-do' }} aria-label="Go to what I do section">What I Do</Link></li>
          <li><Link to={{ pathname: '/', search: '?section=about' }} aria-label="Go to about section">About</Link></li>
          <li><Link to={{ pathname: '/skills' }} aria-label="Go to skills page">Skills</Link></li>
          <li><Link to={{ pathname: '/', search: '?section=experience' }} aria-label="Go to experience section">Experience</Link></li>
          <li><Link to="/education" aria-label="Go to education page">Education</Link></li>
          <li><Link to={{ pathname: '/', search: '?section=contact' }} aria-label="Go to contact section">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 