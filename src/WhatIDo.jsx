import React from 'react';
import { FaHeadset, FaBug, FaShieldAlt, FaCogs, FaUsers, FaRocket } from 'react-icons/fa';
import './WhatIDo.css';
import './design-system.css';

const WhatIDo = () => {
  const services = [
    {
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "Resolving complex IT issues with 95% success rate and exceptional customer satisfaction.",
      features: ["Hardware Troubleshooting", "Software Installation", "Network Configuration", "Remote Support"]
    },
    {
      icon: <FaBug />,
      title: "Quality Assurance",
      description: "Ensuring software excellence through comprehensive testing and quality control processes.",
      features: ["Manual Testing", "Automated Testing", "API Testing", "Performance Testing"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Networks",
      description: "CompTIA certified infrastructure and security expert with advanced cybersecurity skills.",
      features: ["Network Security", "Cybersecurity", "Infrastructure", "Compliance"]
    }
  ];

  return (
    <section className="what-i-do" id="what-i-do">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-display">What I Do</h2>
          <p className="section-subtitle font-body">
            Delivering exceptional technical solutions with precision and expertise
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title font-bold">{service.title}</h3>
              <p className="service-description font-body">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <FaRocket className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <h3 className="cta-title font-display">Ready to Work Together?</h3>
          <div className="cta-buttons">
            <button className="btn-primary">Start a Project</button>
            <button className="btn-secondary">View Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo; 