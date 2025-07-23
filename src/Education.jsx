import React from 'react';
import { 
  FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, 
  FaAward, FaBook, FaTools, FaCog, FaIndustry, FaCertificate 
} from 'react-icons/fa';
import './Education.css';
import comptiaA from '../comptia/a+ logo.png';
import comptiaNetwork from '../comptia/network +.jpg';
import comptiaSecurity from '../comptia/security+.png';
import googleIT from '../comptia/google it.png';

const Education = () => {
  const educationData = [
    {
      institution: "Fanshawe College",
      location: "London, Ontario",
      degree: "Software and Information Systems Testing (Co-op)",
      period: "September 2022 – April 2023",
      type: "Ontario Graduate Certificate",
      description: "Specialized graduate program focused on software and information systems testing, including hands-on co-op experience in quality assurance and test automation.",
      achievements: [
        "Completed co-op placement in software testing and QA",
        "Developed and executed test plans for real-world projects",
        "Gained expertise in test automation tools and methodologies",
        "Collaborated with development teams to ensure software quality",
        "Applied industry best practices in information systems testing",
        "Specialized in web application testing methodologies, technical documentation, and issue tracking within Agile environments.",
        "Built foundational skills in automated testing tools and functional testing procedures, with exposure to technical support and basic networking concepts.",
        "Collaborated on troubleshooting application issues, documenting bugs, and assisting in environment setup for test and support workflows.",
        "Focused on information technology, database management, and IT infrastructure fundamentals."
      ],
      skills: ["Software Testing", "Test Automation", "Quality Assurance", "Information Systems", "Test Planning", "Co-op Experience"],
      icon: <FaUniversity />,
      color: "primary"
    },
    {
      institution: "Karunya Institute of Technology and Science (KITS)",
      location: "India",
      degree: "Master of Engineering (M.Eng) in Mechanical Engineering",
      period: "July 2013 - April 2015",
      type: "Master's Degree",
      description: "Specialization in Thermal Science. Advanced coursework and research in thermal systems, heat transfer, and energy engineering.",
      achievements: [
        "Completed research projects in thermal science and energy systems",
        "Studied advanced heat transfer, thermodynamics, and fluid mechanics",
        "Developed analytical and simulation skills for engineering applications",
        "Collaborated on academic and industry-sponsored research initiatives"
      ],
      skills: ["Thermal Science", "Heat Transfer", "Energy Systems", "Research", "Simulation", "Advanced Engineering"],
      icon: <FaGraduationCap />,
      color: "secondary"
    },
    {
      institution: "CCET",
      location: "India",
      degree: "Bachelor’s in Mechanical Engineering",
      period: "2009 – 2013",
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
      name: "CompTIA A+",
      issuer: "CompTIA",
      date: "2024",
      description: "Hardware and software troubleshooting",
      logo: comptiaA
    },
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      date: "2024",
      description: "Network infrastructure and troubleshooting",
      logo: comptiaNetwork
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2024",
      description: "Cybersecurity and information security",
      logo: comptiaSecurity
    },
    {
      name: "Google IT Support",
      issuer: "Google",
      date: "2024",
      description: "IT infrastructure and technical support",
      logo: googleIT
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
                    <img src={cert.logo} alt={cert.name} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
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
        </div>
      </div>
    </section>
  );
};

export default Education; 