import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here (clear tokens, user session, etc.)
    // Then redirect to welcome page
    navigate('/'); // Changed from '/login' to '/'
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="menu-page">
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          <Link to="/ready-built" className="sidebar-link" onClick={toggleMenu}>
            <span className="link-icon">💻</span>
            <span className="link-text">Ready Build</span>
          </Link>
          <Link to="/repair" className="sidebar-link" onClick={toggleMenu}>
            <span className="link-icon">🛠️</span>
            <span className="link-text">Repair</span>
          </Link>
          <Link to="/cart" className="sidebar-link" onClick={toggleMenu}>
            <span className="link-icon">🛒</span>
            <span className="link-text">Cart</span>
          </Link>
          <button className="sidebar-link logout-btn" onClick={handleLogout}>
            <span className="link-icon">🔒</span>
            <span className="link-text">Logout</span>
          </button>
        </div>
      </nav>

      <div className="menu-content">
        <header className="menu-header">
          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
          <div className="menu-logo">
            RIG<span className="logo-accent">FORGE</span>
          </div>
        </header>

        <main className="menu-container">
          <h1 className="menu-title">Build Your Own Rig</h1>
          <p className="menu-description">
            Choose this option if you'd like to customize your PC from scratch.
          </p>
          <Link to="/build" className="menu-btn">
            START
          </Link>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;