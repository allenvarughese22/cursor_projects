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
        'Help Desk Support',             
        'Technical Documentation'
      ]
    },
    softwareTesting: {
      title: 'Software Testing',
      icon: <FaBug />,
      skills: [
        'Manual Testing',
        'Automated Testing',       
        
        'Test Planning & Strategy',
        'Test Case Design & Execution',
        
        'Test Environment Setup',
        
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
        
        'JIRA',
        ,
        'Git/GitHub',
        'Jenkins CI/CD',
        'Docker',
        'AWS/Azure',
        'VMware',
        
      ]
    },
    programming: {
      title: 'Programming & Scripting',
      icon: <FaCode />,
      skills: [
        
        'Python',
        'Java',
        'SQL',
        'HTML/CSS',
              ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: [
        'Problem Solving',
        
        'Time Management',
        'Attention to Detail',
        'Adaptability',
        
        
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

        {/* Removed skills-summary section */}

      </div>
    </section>
  );
};

export default Skills; 