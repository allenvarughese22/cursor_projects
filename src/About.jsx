import React from 'react';
import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaGraduationCap, FaBriefcase, FaAward, FaUsers } from 'react-icons/fa';
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
      'TeamViewer', 'ServiceNow', 'Zendesk', 'Slack', 'Microsoft Teams',
      'Windows', 'Linux', 'Mac OS', 'VirtualBox'
    ],
    programming: [
      'Python', 'Java', 'C', 'SQL', 'HTML/CSS', 'REST APIs', 'JSON/XML', 'PowerShell',
    ],
    soft: [
      'Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication',
      'Time Management', 'Attention to Detail', 'Adaptability', 'Continuous Learning',
      'Customer Service Excellence', 'Technical Documentation', 'Training & Mentoring'
    ]
  };

  const experience = [
    {
      title: 'Software Quality Analyst',
      company: 'Info-Tech Research Group',
      period: 'May 2023 – September 2023',
      location: 'London, Ontario',
      type: 'Full-time',
      description: 'Developed comprehensive test cases for web applications, ensuring cross-browser compatibility and system functionality.',
      achievements: [
        'Collaborated with Agile development teams to identify defects, conduct root cause analysis, and verify technical solutions.',
        'Utilized JIRA ticketing system for issue tracking, escalation, and resolution documentation.',
        'Executed API testing using REST APIs and Postman, validating system integrations and data integrity.',
        'Created automated solutions using Java and Selenium WebDriver, improving testing efficiency and accuracy.'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'JIRA', 'Postman', 'REST APIs']
    },
    {
      title: 'Technical Support Specialist',
      company: 'Sutherland Global Service',
      period: 'January 2021 – May 2022',
      location: 'Kerala, India',
      type: 'Full-time',
      description: 'Provided Tier 2 support for Amazon Seller Central, resolving 50+ weekly tickets related to API integration errors, account configurations, and backend connectivity issues with a 95% SLA compliance rate.',
      achievements: [
        'Investigated and troubleshot multi-system workflows including inventory sync, payment processing delays, and listing optimization failures.',
        'Collaborated with engineering teams for critical issue escalation, creating logs and reproducible case reports.',
        'Authored and updated internal documentation and knowledge base articles to streamline future resolutions.',
        'Delivered interim solutions and technical workarounds to minimize downtime and maintain business continuity for sellers.'
      ],
      technologies: ['Amazon Seller Central', 'API Integration', 'Knowledge Base', 'Ticketing Systems']
    },
    {
      title: 'Technical Trainer',
      company: 'Karunya Institute of Technology and Science',
      period: 'September 2017 – January 2020',
      location: 'India',
      type: 'Full-time',
      description: 'Taught AutoCAD 2D/3D drafting as the main tool for creating mechanical designs, including dimensioning, tolerancing, and layout standards.',
      achievements: [
        'Used Python and C alongside AutoCAD to automate calculations, such as stress analysis, fit checks, and batch drawing updates.',
        'Designed projects where students combined AutoCAD modeling with Python/C scripts for engineering problem-solving and design validation.',
        'Assisted with computer lab setup and maintenance, including OS installation, driver configuration, and hardware upgrades.'
      ],
      technologies: ['AutoCAD', 'Python', 'C', 'Windows OS', 'Computer Hardware']
    }
  ];

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

  const education = [
    {
      degree: 'Software and Information Systems Testing (Co-op)',
      school: 'Fanshawe College',
      period: 'September 2022 – April 2023'
    },
    {
      degree: 'Master of Engineering (M.Eng) in Mechanical Engineering',
      school: 'Karunya Institute of Technology and Science (KITS)',
      period: 'July 2013 - April 2015'
    },
    {
      degree: 'Bachelor\'s in Mechanical Engineering',
      school: 'CCET',
      period: '2009 – 2013'
    }
  ];

  const certifications = [
    'CompTIA A+',
    'CompTIA Network+',
    'CompTIA Security+',
    'Google IT Support Professional Certificate'
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
                  Technical Support Specialist with deep expertise in troubleshooting, customer support, and IT systems management. Specialized in resolving complex technical issues, remote desktop support, and ensuring seamless user experiences across diverse environments. Certified in the CompTIA trifecta (A+, Network+, Security+), and highly proficient with tools like JIRA, Postman, and remote support platforms.
                </p>
                <p>
                  Also experienced in software QA and development, with working knowledge of Java, Python, SQL, and Linux. Adaptable, tech-savvy, and committed to continuous learning—ready to deliver value to modern IT and support teams, with a strong foundation in both technical support and software solutions.
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
                <FaUsers className="stat-icon" />
                <div className="stat-content">
                  <h4>Team Player</h4>
                  <p> Reliable & Adaptable </p>
                </div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div className="stat-content">
                  <h4>CompTia Certified</h4>
                  <p>Self Learner</p>
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

          <div className="education-section">
            <h3>Education & Certifications</h3>
            <div className="education-grid">
              <div className="education-category">
                <h4><FaGraduationCap /> Education</h4>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h5>{edu.degree}</h5>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-period" style={{ textAlign: 'center', margin: 0 }}>{edu.period}</p>
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