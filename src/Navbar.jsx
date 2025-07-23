import React from 'react';
import './Navbar.css';
import './design-system.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar-tesla" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div 
          className="nav-brand font-display" 
          onClick={() => scrollToSection('hero')}
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
        >
          AV
        </div>
        <ul className="nav-links">
          <li><a href="#what-i-do" onClick={(e) => { e.preventDefault(); scrollToSection('what-i-do'); }} aria-label="Go to what I do section">What I Do</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} aria-label="Go to about section">About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} aria-label="Go to skills section">Skills</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} aria-label="Go to experience section">Experience</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} aria-label="Go to education section">Education</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} aria-label="Go to contact section">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 