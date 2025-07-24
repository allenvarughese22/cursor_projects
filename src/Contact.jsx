import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaClock, FaUserTie, FaGlobe, FaDownload, FaPaperPlane 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'allenvarughese22@gmail.com',
      link: 'mailto:allenvarughese22@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '226-688-7343',
      link: 'tel:226-688-7343',
      description: 'Call me directly'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'London, Ontario, Canada',
      link: null,
      description: 'Based in London, Ontario'
    },
    {
      icon: <FaUserTie />,
      title: 'Status',
      value: 'PR Holder',
      link: null,
      description: 'Available for all shifts'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'allen-varughese',
      link: 'https://www.linkedin.com/in/allen-varughese',
      description: 'Connect with me on LinkedIn'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'allenvarughese22',
      link: 'https://github.com/allenvarughese22',
      description: 'View my projects and code'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            Ready to collaborate? Let's discuss your next project or opportunity.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-cards">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-card"
                  >
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    <div className="social-details">
                      <h4>{social.title}</h4>
                      <span className="social-value">{social.value}</span>
                      <p className="social-description">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Remove the contact-footer section and add a haiku poem */}
        <div className="contact-quote">
          <blockquote>
            <p>In quiet moments<br />
            Connections bloom, hearts open<br />
            New journeys begin</p>
            <footer>— Haiku</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Contact; 