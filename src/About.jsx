import React from 'react';
import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = {
    technicalSupport: [
      'Customer Service Management', 'Technical Troubleshooting', 'Remote Desktop Support',
      'Software Installation & Configuration', 'Hardware Diagnostics', 'Network Troubleshooting',
      'System Administration', 'Help Desk Support', 'Incident Management', 'Knowledge Base Management',
      'Service Level Agreement (SLA) Management', 'Escalation Procedures', 'Remote Support Tools'
    ],
    softwareTesting: [
      'Manual Testing', 'Automated Testing', 'API Testing', 'Performance Testing',
      'Security Testing', 'Test Planning & Strategy', 'Test Case Design & Execution',
      'Bug Reporting & Tracking', 'Regression Testing', 'Cross-browser Testing',
      'Mobile App Testing', 'Database Testing', 'User Acceptance Testing (UAT)',
      'Test Environment Setup', 'Test Data Management'
    ],
    tools: [
      'Selenium WebDriver', 'JUnit/TestNG', 'Postman', 'JMeter', 'LoadRunner',
      'JIRA', 'Confluence', 'TestRail', 'Bugzilla', 'Git/GitHub',
      'Jenkins CI/CD', 'Docker', 'AWS/Azure', 'VMware', 'Remote Desktop',
      'TeamViewer', 'ServiceNow', 'Zendesk', 'Slack', 'Microsoft Teams'
    ],
    programming: [
      'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS', 'React', 'Node.js',
      'REST APIs', 'JSON/XML', 'Shell Scripting', 'PowerShell', 'Batch Scripting'
    ],
    soft: [
      'Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication',
      'Time Management', 'Attention to Detail', 'Adaptability', 'Continuous Learning',
      'Customer Service Excellence', 'Technical Documentation', 'Training & Mentoring'
    ]
  };

  const experience = [
    {
      title: 'Technical Support Specialist',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Providing comprehensive technical support and troubleshooting for software applications, hardware issues, and network connectivity problems. Managing customer inquiries through multiple channels and ensuring optimal system performance.',
      achievements: [
        'Resolved 95% of customer issues within SLA timeframes with 98% customer satisfaction',
        'Implemented automated testing processes reducing bug reports by 40%',
        'Mentored junior team members and created knowledge base documentation',
        'Managed 50+ daily support tickets across multiple platforms'
      ]
    },
    {
      title: 'Software Testing Specialist',
      company: 'Quality Assurance Corp.',
      period: '2021 - 2022',
      description: 'Conducted comprehensive software testing including manual and automated testing procedures for web applications, mobile apps, and API endpoints.',
      achievements: [
        'Developed and executed 200+ test cases covering functional, regression, and performance testing',
        'Automated 60% of regression testing processes using Selenium and TestNG',
        'Improved test coverage by 35% and reduced bug escape rate by 25%',
        'Performed API testing using Postman and JMeter for performance validation'
      ]
    },
    {
      title: 'Junior Developer & QA Tester',
      company: 'Startup Innovations',
      period: '2020 - 2021',
      description: 'Contributed to full-stack development projects with focus on testing and quality assurance. Provided technical support for internal tools and applications.',
      achievements: [
        'Built and maintained REST APIs with comprehensive testing coverage',
        'Implemented CI/CD pipelines with automated testing integration',
        'Provided technical support for internal development tools and applications',
        'Collaborated on agile development teams with focus on quality assurance'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Western University',
      period: '2016 - 2020',
      description: 'Specialized in Software Engineering with focus on testing methodologies and quality assurance.'
    },
    {
      degree: 'Software Testing Certification',
      school: 'ISTQB',
      period: '2021',
      description: 'Certified Tester Foundation Level (CTFL) with expertise in test design and execution.'
    }
  ];

  const certifications = [
    'ISTQB Certified Tester Foundation Level (CTFL)',
    'AWS Certified Cloud Practitioner',
    'Microsoft Azure Fundamentals',
    'Selenium WebDriver Certification'
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-intro">
                          <div className="about-text">
                <h3>Professional Summary</h3>
                <p>
                  I'm a dedicated Technical Support Specialist and Software Testing Specialist with a passion for 
                  ensuring software quality and exceptional user experience. Based in London, Ontario, I bring a unique 
                  blend of technical troubleshooting expertise and comprehensive testing methodologies to every project.
                </p>
                <p>
                  With extensive experience in both technical support and software testing, I specialize in identifying 
                  and resolving complex technical issues while maintaining high standards of quality assurance. My expertise 
                  spans from customer service management to automated testing implementation, providing end-to-end solutions 
                  for software reliability and user satisfaction.
                </p>
                <p>
                  I'm committed to continuous learning and staying current with the latest support tools and testing 
                  methodologies. Available for all shifts and ready to contribute to dynamic teams that value quality, 
                  innovation, and exceptional customer service.
                </p>
              </div>
            <div className="about-stats">
              <div className="stat-item">
                <FaBriefcase className="stat-icon" />
                <div className="stat-content">
                  <h4>3+ Years</h4>
                  <p>Technical Support</p>
                </div>
              </div>
              <div className="stat-item">
                <FaTools className="stat-icon" />
                <div className="stat-content">
                  <h4>20+ Tools</h4>
                  <p>Testing & Support</p>
                </div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div className="stat-content">
                  <h4>15+ Skills</h4>
                  <p>Software Testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4><FaTools /> Technical Support</h4>
                <div className="skill-tags">
                  {skills.technicalSupport.slice(0, 6).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4><FaCode /> Software Testing</h4>
                <div className="skill-tags">
                  {skills.softwareTesting.slice(0, 6).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4><FaServer /> Tools & Technologies</h4>
                <div className="skill-tags">
                  {skills.tools.slice(0, 6).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4><FaCode /> Programming & Scripting</h4>
                <div className="skill-tags">
                  {skills.programming.slice(0, 6).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h3>Professional Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.title}</h4>
                      <span className="timeline-company">{exp.company}</span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education & Certifications</h3>
            <div className="education-grid">
              <div className="education-category">
                <h4><FaGraduationCap /> Education</h4>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h5>{edu.degree}</h5>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-period">{edu.period}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                ))}
              </div>
              <div className="education-category">
                <h4><FaAward /> Certifications</h4>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <span className="certification-badge"></span>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 