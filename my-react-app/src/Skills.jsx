import React, { useState } from 'react';
import { 
  FaTools, FaCode, FaServer, FaCloud, FaDatabase, FaDesktop, 
  FaMobile, FaNetworkWired, FaShieldAlt, FaChartLine, 
  FaUsers, FaHeadset, FaBug, FaCheckCircle, FaRocket 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    technicalSupport: {
      title: 'Technical Support',
      icon: <FaHeadset />,
      skills: [
        'Customer Service Management',
        'Technical Troubleshooting',
        'Remote Desktop Support',
        'Software Installation & Configuration',
        'Hardware Diagnostics',
        'Network Troubleshooting',
        'System Administration',
        'Help Desk Support',
        'Incident Management',
        'Knowledge Base Management',
        'Service Level Agreement (SLA) Management',
        'Escalation Procedures',
        'Remote Support Tools',
        'Customer Relationship Management',
        'Technical Documentation'
      ]
    },
    softwareTesting: {
      title: 'Software Testing',
      icon: <FaBug />,
      skills: [
        'Manual Testing',
        'Automated Testing',
        'API Testing',
        'Performance Testing',
        'Security Testing',
        'Test Planning & Strategy',
        'Test Case Design & Execution',
        'Bug Reporting & Tracking',
        'Regression Testing',
        'Cross-browser Testing',
        'Mobile App Testing',
        'Database Testing',
        'User Acceptance Testing (UAT)',
        'Test Environment Setup',
        'Test Data Management',
        'Load Testing',
        'Stress Testing',
        'Usability Testing'
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        'Selenium WebDriver',
        'JUnit/TestNG',
        'Postman',
        'JMeter',
        'LoadRunner',
        'JIRA',
        'Confluence',
        'TestRail',
        'Bugzilla',
        'Git/GitHub',
        'Jenkins CI/CD',
        'Docker',
        'AWS/Azure',
        'VMware',
        'Remote Desktop',
        'TeamViewer',
        'ServiceNow',
        'Zendesk',
        'Slack',
        'Microsoft Teams'
      ]
    },
    programming: {
      title: 'Programming & Scripting',
      icon: <FaCode />,
      skills: [
        'JavaScript',
        'Python',
        'Java',
        'SQL',
        'HTML/CSS',
        'React',
        'Node.js',
        'REST APIs',
        'JSON/XML',
        'Shell Scripting',
        'PowerShell',
        'Batch Scripting',
        'TypeScript',
        'C#',
        'PHP'
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: [
        'Problem Solving',
        'Analytical Thinking',
        'Team Collaboration',
        'Communication',
        'Time Management',
        'Attention to Detail',
        'Adaptability',
        'Continuous Learning',
        'Customer Service Excellence',
        'Technical Documentation',
        'Training & Mentoring',
        'Critical Thinking',
        'Decision Making',
        'Stress Management',
        'Leadership'
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  const filteredSkills = activeCategory === 'all' 
    ? Object.values(skillCategories)
    : [skillCategories[activeCategory]];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills & Expertise</h2>
          <div className="skills-divider"></div>
          <p className="skills-subtitle">
            Comprehensive skill set in technical support and software testing
          </p>
        </div>

        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {skillCategories[category].icon}
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        <div className="skills-content">
          {filteredSkills.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-count">{category.skills.length} Skills</div>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      <FaCheckCircle />
                    </div>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <FaRocket className="summary-icon" />
            <h3>Technical Support Expertise</h3>
            <p>15+ skills in customer service, troubleshooting, and system administration</p>
          </div>
          <div className="summary-card">
            <FaBug className="summary-icon" />
            <h3>Software Testing Mastery</h3>
            <p>18+ testing methodologies and tools for comprehensive quality assurance</p>
          </div>
          <div className="summary-card">
            <FaTools className="summary-icon" />
            <h3>Tools & Technologies</h3>
            <p>20+ tools and platforms for development, testing, and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 