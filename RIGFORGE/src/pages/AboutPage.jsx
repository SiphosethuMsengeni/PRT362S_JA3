import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-logo">
          RIG<span className="logo-accent">FORGE</span>
        </div>
        
      </header>

      <main className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          At <strong>RIGFORGE</strong>, we are passionate about building high-performance custom PCs
          tailored to your needs. Whether you’re a gamer, a content creator, or simply looking for
          a reliable workstation, we provide solutions that combine cutting-edge technology with
          expert craftsmanship.
        </p>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower our customers with powerful, reliable, and personalized computer systems.
            We believe in making high-performance computing accessible and customizable.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>⚡ High-performance components</li>
            <li>🛠️ Expert repair and support services</li>
            <li>💻 Ready-to-use builds for every need</li>
            <li>🎯 Full customization options</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out anytime at 
            <a href="mailto:support@rigforge.com"> support@rigforge.com</a>
          </p>
        </section>

        
      </main>
    </div>
  );
};

export default AboutPage;
