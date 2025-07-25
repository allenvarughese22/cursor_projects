import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaUsers, FaCode, FaTools } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      title: 'Software Quality Analyst',
      company: 'Info-Tech Research Group',
      location: 'London, Ontario',
      period: 'May 2023 – September 2023',
      type: 'Full-time',
      description: 'Developed comprehensive test cases for web applications, ensuring cross-browser compatibility and system functionality.',
      achievements: [
        'Collaborated with Agile development teams to identify defects, conduct root cause analysis, and verify technical solutions.',
        'Utilized JIRA ticketing system for issue tracking, escalation, and resolution documentation.',
        'Executed API testing using REST APIs and Postman, validating system integrations and data integrity.',
        'Created automated solutions using Java and Selenium WebDriver, improving testing efficiency and accuracy.'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'JIRA', 'Postman', 'REST APIs'],
      icon: <FaTools />
    },
    {
      title: 'Technical Support Specialist',
      company: 'Sutherland Global Service',
      location: 'Kerala, India',
      period: 'January 2021 – May 2022',
      type: 'Full-time',
      description: 'Provided Tier 2 support for Amazon Seller Central, resolving 50+ weekly tickets related to API integration errors, account configurations, and backend connectivity issues with a 95% SLA compliance rate.',
      achievements: [
        'Investigated and troubleshot multi-system workflows including inventory sync, payment processing delays, and listing optimization failures.',
        'Collaborated with engineering teams for critical issue escalation, creating logs and reproducible case reports.',
        'Authored and updated internal documentation and knowledge base articles to streamline future resolutions.',
        'Delivered interim solutions and technical workarounds to minimize downtime and maintain business continuity for sellers.'
      ],
      technologies: ['Amazon Seller Central', 'API Integration', 'Knowledge Base', 'Ticketing Systems'],
      icon: <FaUsers />
    },
    {
      title: 'Technical Trainer',
      company: 'Karunya Institute of Technology and Science',
      location: 'India',
      period: 'September 2017 – January 2020',
      type: 'Full-time',
      description: 'Taught AutoCAD 2D/3D drafting as the main tool for creating mechanical designs, including dimensioning, tolerancing, and layout standards.',
      achievements: [
        'Used Python and C alongside AutoCAD to automate calculations, such as stress analysis, fit checks, and batch drawing updates.',
        'Designed projects where students combined AutoCAD modeling with Python/C scripts for engineering problem-solving and design validation.',
        'Assisted with computer lab setup and maintenance, including OS installation, driver configuration, and hardware upgrades.'
      ],
      technologies: ['AutoCAD', 'Python', 'C', 'Windows OS', 'Computer Hardware'],
      icon: <FaTools />
    },
    
  ];

  // Additional Experience Section
  const additionalExperience = [
    {
      title: 'Injection Molding Operator',
      company: 'Cooper Standard',
      location: 'Stratford, Ontario, Canada',
      period: 'May 2024 – Present',
      description: 'Manufactured automotive components using injection molding and extrusion, ensuring quality standards, meeting production targets, and collaborating to streamline processes.'
    },
    {
      title: 'Warehouse Associate',
      company: 'Columbia Sportswear Warehouse',
      location: 'London, Ontario, Canada',
      period: 'June 2022 – October 2022',
      description: 'Operated equipment and ensured 100% order accuracy in a fast-paced warehouse environment.'
    }
  ];

  const stats = [
    {
      number: '3+',
      label: 'Years Experience',
      icon: <FaBriefcase />
    },
    {
      number: '95%',
      label: 'Issue Resolution Rate',
      icon: <FaTrophy />
    },
    {
      number: '200+',
      label: 'Test Cases Executed',
      icon: <FaTools />
    },
    {
      number: '50+',
      label: 'Daily Support Tickets',
      icon: <FaUsers />
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <div className="experience-divider"></div>
          <p className="experience-subtitle">
            A journey through technical support and software testing excellence
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">{exp.icon}</div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title-section">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <div className="timeline-meta">
                    <div className="timeline-period">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="timeline-location">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="timeline-type">{exp.type}</div>
                  </div>
                </div>

                <div className="timeline-description">
                  <p>{exp.description}</p>
                </div>

                <div className="timeline-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-technologies">
                  <h4>Technologies & Tools:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Section */}
        <div className="additional-experience-section">
          <h3>Additional Experience</h3>
          <div className="additional-experience-list">
            {additionalExperience.map((job, idx) => (
              <div key={idx} className="additional-experience-item">
                <h4>{job.title}</h4>
                <span className="additional-company">{job.company} | {job.location} | {job.period}</span>
                <p className="additional-description">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 