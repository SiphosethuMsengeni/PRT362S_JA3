import React from 'react';
import '../App.css'; // Adjust path if needed

const MenuPage = () => {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1 className="menu-logo" aria-label="RigForge Brand">
          RIG<span className="logo-accent">F</span>ORGE
        </h1>
      </header>

      <main className="menu-content">
        <nav className="menu-options" aria-label="Rig Menu Options">
          {[
            { text: 'Build Your Own Rig', href: '/build' },
            { text: 'Buy Ready Built Computers', href: '/ready' },
            { text: 'View Cart', href: '/cart' },
            { text: 'Logout', href: '/' },
          ].map((item, index) => (
            <a key={index} href={item.href} className="menu-btn">
              {item.text}
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
};

export default MenuPage;