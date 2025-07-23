import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaUsers, FaCode, FaTools } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      title: 'Technical Support Specialist',
      company: 'Tech Solutions Inc.',
      location: 'London, Ontario',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Providing comprehensive technical support and troubleshooting for software applications, hardware issues, and network connectivity problems. Managing customer inquiries through multiple channels and ensuring optimal system performance.',
      achievements: [
        'Resolved 95% of customer issues within SLA timeframes with 98% customer satisfaction',
        'Implemented automated testing processes reducing bug reports by 40%',
        'Mentored junior team members and created knowledge base documentation',
        'Managed 50+ daily support tickets across multiple platforms',
        'Reduced average resolution time by 30% through process optimization',
        'Led training sessions for new team members on support procedures'
      ],
      technologies: ['ServiceNow', 'TeamViewer', 'Remote Desktop', 'JIRA', 'Confluence', 'Slack'],
      icon: <FaUsers />
    },
    {
      title: 'Software Testing Specialist',
      company: 'Quality Assurance Corp.',
      location: 'Toronto, Ontario',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Conducted comprehensive software testing including manual and automated testing procedures for web applications, mobile apps, and API endpoints.',
      achievements: [
        'Developed and executed 200+ test cases covering functional, regression, and performance testing',
        'Automated 60% of regression testing processes using Selenium and TestNG',
        'Improved test coverage by 35% and reduced bug escape rate by 25%',
        'Performed API testing using Postman and JMeter for performance validation',
        'Created comprehensive test documentation and reporting procedures',
        'Collaborated with development teams to implement testing best practices'
      ],
      technologies: ['Selenium', 'TestNG', 'Postman', 'JMeter', 'JIRA', 'TestRail'],
      icon: <FaTools />
    },
    {
      title: 'Junior Developer & QA Tester',
      company: 'Startup Innovations',
      location: 'Waterloo, Ontario',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Contributed to full-stack development projects with focus on testing and quality assurance. Provided technical support for internal tools and applications.',
      achievements: [
        'Built and maintained REST APIs with comprehensive testing coverage',
        'Implemented CI/CD pipelines with automated testing integration',
        'Provided technical support for internal development tools and applications',
        'Collaborated on agile development teams with focus on quality assurance',
        'Developed automated test scripts for web applications',
        'Participated in code reviews and testing strategy planning'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Git', 'Jenkins', 'Docker'],
      icon: <FaCode />
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

        <div className="experience-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
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

        <div className="experience-summary">
          <div className="summary-content">
            <h3>Career Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <FaTrophy className="highlight-icon" />
                <h4>Technical Excellence</h4>
                <p>Consistently achieved high customer satisfaction rates and efficient problem resolution</p>
              </div>
              <div className="highlight-item">
                <FaTools className="highlight-icon" />
                <h4>Testing Expertise</h4>
                <p>Comprehensive experience in both manual and automated testing methodologies</p>
              </div>
              <div className="highlight-item">
                <FaUsers className="highlight-icon" />
                <h4>Team Leadership</h4>
                <p>Mentored team members and contributed to knowledge sharing initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 