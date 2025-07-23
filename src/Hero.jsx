import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import './Hero.css';
import './design-system.css';
import profilePhoto from '../my photo.png';
import comptiaA from '../comptia/a+ logo.png';
import comptiaNetwork from '../comptia/network +.jpg';
import comptiaSecurity from '../comptia/security+.png';
import googleIT from '../comptia/google it.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  const titles = [
    'Technical Support Specialist',
    'QA Specialist',
    'IT Infrastructure Expert'
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Allen_Varughese.pdf';
    link.download = 'Allen_Varughese_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetConnected = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = [
    { logo: comptiaA, name: 'CompTIA A+', desc: 'Hardware & Software' },
    { logo: comptiaNetwork, name: 'CompTIA Network+', desc: 'Network Infrastructure' },
    { logo: comptiaSecurity, name: 'CompTIA Security+', desc: 'Cybersecurity' },
    { logo: googleIT, name: 'Google IT Support', desc: 'IT Infrastructure' }
  ];

  return (
    <section className="hero-tesla" id="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-slide-left">
            <h1 className="hero-title font-display">
              ALLEN VARUGHESE
            </h1>
            <div className="hero-subtitle">
              <h2 className="font-bold">
                {currentTitle}
                <span className="typewriter-cursor">|</span>
              </h2>
              <p className="hero-location">London, Ontario</p>
            </div>
            
            <div className="hero-description">
              <p className="font-body">
                Technical Support & QA Specialist with CompTIA A+, Network+, Security+ certifications. 
                Expert in troubleshooting, software testing, and IT infrastructure.
              </p>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleDownloadResume}>
                <FaDownload className="btn-icon" />
                Download Resume
              </button>
              <button className="btn-secondary" onClick={handleGetConnected}>
                Get Connected
              </button>
            </div>
            
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/allen-varughese" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/allenvarughese22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:allenvarughese22@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

            {/* Small certification badges */}
            <div className="certification-badges">
              <h4 className="badges-title">Certifications</h4>
              <div className="badges-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-badge">
                    <div className="badge-logo">
                      <img src={cert.logo} alt={cert.name} />
                    </div>
                    <div className="badge-info">
                      <span className="badge-name">{cert.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-slide-right">
            <div className="profile-container">
              <img
                src={profilePhoto}
                alt="Allen Varughese"
                className="hero-profile-img"
                onLoad={() => setIsLoaded(true)}
              />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tesla-style certifications section */}
      <div className="certifications-tesla">
        <div className="container">
          <h3 className="certifications-title font-display">Professional Certifications</h3>
          <div className="certifications-grid grid grid-cols-4">
            <div className="certification-card-tesla">
              <div className="certification-logo">
                <img src={comptiaA} alt="CompTIA A+" />
              </div>
              <div className="certification-content">
                <h4 className="font-bold">CompTIA A+</h4>
                <p>Hardware & Software</p>
              </div>
            </div>
            
            <div className="certification-card-tesla">
              <div className="certification-logo">
                <img src={comptiaNetwork} alt="CompTIA Network+" />
              </div>
              <div className="certification-content">
                <h4 className="font-bold">CompTIA Network+</h4>
                <p>Network Infrastructure</p>
              </div>
            </div>
            
            <div className="certification-card-tesla">
              <div className="certification-logo">
                <img src={comptiaSecurity} alt="CompTIA Security+" />
              </div>
              <div className="certification-content">
                <h4 className="font-bold">CompTIA Security+</h4>
                <p>Cybersecurity</p>
              </div>
            </div>
            
            <div className="certification-card-tesla">
              <div className="certification-logo">
                <img src={googleIT} alt="Google IT Support" />
              </div>
              <div className="certification-content">
                <h4 className="font-bold">Google IT Support</h4>
                <p>IT Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <FaChevronDown />
      </div>
    </section>
  );
};

export default Hero; 