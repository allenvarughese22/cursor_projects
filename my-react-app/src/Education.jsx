import React from 'react';
import { 
  FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, 
  FaAward, FaBook, FaTools, FaCog, FaIndustry, FaCertificate 
} from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Fanshawe College",
      location: "London, Ontario, Canada",
      degree: "Computer Systems Technology",
      period: "2022 - 2024",
      type: "Diploma",
      description: "Comprehensive program focusing on computer systems, networking, and software development with hands-on practical experience.",
      achievements: [
        "Specialized in Technical Support and Software Testing methodologies",
        "Completed advanced courses in system administration and troubleshooting",
        "Developed practical skills in hardware and software maintenance",
        "Gained expertise in network configuration and security protocols",
        "Participated in real-world projects and industry simulations"
      ],
      skills: ["Technical Support", "Software Testing", "System Administration", "Network Configuration", "Hardware Maintenance", "Troubleshooting"],
      icon: <FaUniversity />,
      color: "primary"
    },
    {
      institution: "Bachelor of Engineering",
      location: "Mechanical Engineering",
      degree: "Mechanical Engineering",
      period: "2018 - 2022",
      type: "Bachelor's Degree",
      description: "Comprehensive engineering program covering mechanical design, manufacturing processes, and engineering principles with strong analytical and problem-solving foundation.",
      achievements: [
        "Developed strong analytical and problem-solving skills",
        "Gained expertise in mechanical design and CAD software",
        "Completed projects in manufacturing processes and quality control",
        "Studied thermodynamics, fluid mechanics, and material science",
        "Applied engineering principles to real-world technical challenges"
      ],
      skills: ["Analytical Thinking", "Problem Solving", "CAD Design", "Manufacturing Processes", "Quality Control", "Engineering Principles"],
      icon: <FaGraduationCap />,
      color: "secondary"
    }
  ];

  const certifications = [
    {
      name: "Technical Support Certification",
      issuer: "Fanshawe College",
      date: "2024",
      description: "Comprehensive technical support and troubleshooting certification"
    },
    {
      name: "Software Testing Fundamentals",
      issuer: "Fanshawe College",
      date: "2024",
      description: "Core software testing methodologies and quality assurance practices"
    },
    {
      name: "Network Administration",
      issuer: "Fanshawe College",
      date: "2024",
      description: "Network configuration, security, and administration skills"
    }
  ];

  const keySkills = [
    {
      category: "Technical Skills",
      skills: ["System Administration", "Hardware Troubleshooting", "Software Testing", "Network Configuration", "Quality Assurance"]
    },
    {
      category: "Engineering Skills",
      skills: ["Analytical Thinking", "Problem Solving", "CAD Design", "Manufacturing Processes", "Quality Control"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Team Collaboration", "Time Management", "Attention to Detail", "Customer Service"]
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Education & Qualifications</h2>
          <div className="education-divider"></div>
          <p className="education-subtitle">
            My academic journey combining technical expertise with engineering principles
          </p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((education, index) => (
              <div key={index} className={`education-card ${education.color}`}>
                <div className="education-icon">
                  {education.icon}
                </div>
                <div className="education-details">
                  <div className="education-header-info">
                    <h3 className="education-degree">{education.degree}</h3>
                    <div className="education-meta">
                      <span className="education-institution">{education.institution}</span>
                      <span className="education-location">
                        <FaMapMarkerAlt /> {education.location}
                      </span>
                      <span className="education-period">
                        <FaCalendarAlt /> {education.period}
                      </span>
                      <span className="education-type">{education.type}</span>
                    </div>
                  </div>
                  
                  <p className="education-description">{education.description}</p>
                  
                  <div className="education-achievements">
                    <h4>Achievements & Highlights</h4>
                    <ul>
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="education-skills">
                    <h4>Key Skills Developed</h4>
                    <div className="skills-tags">
                      {education.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3>Certifications & Training</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon">
                    <FaCertificate />
                  </div>
                  <div className="certification-details">
                    <h4>{cert.name}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <p className="certification-date">{cert.date}</p>
                    <p className="certification-description">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-summary-section">
            <h3>Skills Summary</h3>
            <div className="skills-summary-grid">
              {keySkills.map((skillGroup, index) => (
                <div key={index} className="skill-group-card">
                  <div className="skill-group-header">
                    <h4>{skillGroup.category}</h4>
                  </div>
                  <div className="skill-group-list">
                    {skillGroup.skills.map((skill, idx) => (
                      <span key={idx} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-footer">
            <div className="footer-highlight">
              <FaAward className="highlight-icon" />
              <div className="highlight-content">
                <h4>Academic Excellence</h4>
                <p>Combining technical expertise with strong engineering foundation for comprehensive problem-solving capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 