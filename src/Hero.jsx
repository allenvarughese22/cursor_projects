import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Hero.css';
import profilePhoto from '../my photo.png';
import comptiaA from '../comptia/a+ logo.png';
import comptiaNetwork from '../comptia/network +.jpg';
import comptiaSecurity from '../comptia/security+.png';
import googleIT from '../comptia/google it.png';

const titles = [
  'Technical Support Specialist',
  'Software Testing Specialist',
  'Automation Enthusiast',
  'Cloud & API Explorer',
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingSpeed = 80;
  const pause = 1200;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      if (!deleting && charIndex < titles[titleIndex].length) {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === titles[titleIndex].length) {
        setDeleting(true);
        setTimeout(() => {}, pause);
      } else if (deleting && charIndex > 0) {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(intervalRef.current);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="hero tech-bg" id="hero">
      {/* Enhanced Tech Background */}
      <div className="tech-grid-bg"></div>
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>
      
      {/* SVG Particle Background */}
      <svg className="hero-svg-bg" width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="100" r="3" className="particle" />
        <circle cx="400" cy="200" r="2" className="particle" />
        <circle cx="800" cy="300" r="4" className="particle" />
        <circle cx="1200" cy="150" r="2.5" className="particle" />
        <circle cx="1000" cy="400" r="3.5" className="particle" />
        <circle cx="600" cy="500" r="2.5" className="particle" />
        <circle cx="300" cy="350" r="2" className="particle" />
        <circle cx="1100" cy="550" r="2" className="particle" />
        <circle cx="500" cy="250" r="1.5" className="particle" />
        <circle cx="900" cy="150" r="2.8" className="particle" />
        <circle cx="700" cy="450" r="1.8" className="particle" />
      </svg>

      <div className="hero-content">
        <div className="hero-glass-card hero-gradient-border animate-fade-in">
          <div className="profile-container">
            <div className="profile-frame">
              <img
                src={profilePhoto}
                alt="Allen Varughese"
                className="hero-profile-img"
              />
              <div className="profile-glow"></div>
            </div>
          </div>
          
          <div className="hero-info">
            <h1 className="hero-name">Allen Varughese</h1>
            <div className="hero-divider"></div>
            <h2 className="hero-typewriter">
              {currentTitle}
              <span className="typewriter-cursor">|</span>
            </h2>
            <p className="hero-location">London, Ontario | PR Holder | All Shifts Available</p>
            
            <div className="hero-contact">
              <a href="mailto:allenvarughese22@gmail.com">allenvarughese22@gmail.com</a> | 226-688-7343
            </div>
            
            <div className="hero-socials animate-socials">
              <a href="https://www.linkedin.com/in/allen-varughese" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/allenvarughese22" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:allenvarughese22@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
            
            <a className="hero-resume-btn hero-glow-btn" href="/Resume_Allen_Varughese.pdf" download="Resume_Allen_Varughese.pdf">
              <span className="btn-text">Download Resume</span>
              <span className="btn-glow"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="hero-certifications">
        <h3 className="certifications-title">Professional Certifications</h3>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="certification-logo">
              <img src={comptiaNetwork} alt="CompTIA Network+" />
            </div>
            <div className="certification-content">
              <h4>CompTIA Network+</h4>
              <p>Network infrastructure and troubleshooting</p>
            </div>
          </div>
          
          <div className="certification-card">
            <div className="certification-logo">
              <img src={comptiaSecurity} alt="CompTIA Security+" />
            </div>
            <div className="certification-content">
              <h4>CompTIA Security+</h4>
              <p>Cybersecurity and information security</p>
            </div>
          </div>
          
          <div className="certification-card">
            <div className="certification-logo">
              <img src={googleIT} alt="Google IT Support" />
            </div>
            <div className="certification-content">
              <h4>Google IT Support</h4>
              <p>IT infrastructure and technical support</p>
            </div>
          </div>
          
          <div className="certification-card">
            <div className="certification-logo">
              <img src={comptiaA} alt="CompTIA A+" />
            </div>
            <div className="certification-content">
              <h4>CompTIA A+</h4>
              <p>Hardware and software troubleshooting</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <FaChevronDown />
      </div>
    </section>
  );
};

export default Hero; 