import React from 'react';
import '../App.css'; // adjust the path if your CSS is in src/

const BuildPage = () => {
  return (
    <div className="build-page">
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="hamburger">☰</div>
        <h1 className="logo">
          RIG<span className="logo-accent">F</span>ORGE
        </h1>
      </header>

      {/* Main Content */}
      <main className="hero-section">
        <div className="left-description">
          <p>
            A simple description about choosing the “Build Your Own Rig” option
          </p>
        </div>

        <div className="build-content">
          <h2 className="hero-text">
            Build<br />Your<br />Own<br />RIG
          </h2>
          <button className="start-btn">START</button>
        </div>

        <div className="right-description">
          <p>
            A simple description about choosing the “Buy Ready Built Computers” option
          </p>
        </div>
      </main>
    </div>
  );
};

export default BuildPage;
