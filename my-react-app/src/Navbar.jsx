import React from 'react';
import './Navbar.css';

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
    <nav className="navbar">
      <div className="navbar-logo">ALLEN VARUGHESE</div>
      <ul className="navbar-links">
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 