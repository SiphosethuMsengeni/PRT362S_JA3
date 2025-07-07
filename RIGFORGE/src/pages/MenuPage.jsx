import React, {useState} from 'react';
import '../App.css'; // Adjust path if needed

const MenuPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="top-bar">
          <div className="menu-icon" onClick={toggleMenu}>☰</div>
          <div className="logo">RIGFORGE</div> 
        </div> 

        {menuOpen && (
          <nav className="dropdown-menu">
            <ul>
              <li><a href="#build">Build Your Own Rig</a></li>
              <li><a href="#buy">Buy Ready Built Machine</a></li>
              <li><a href="#cart">View Cart</a></li>
              <li><a href="logout">Logout</a></li>
            </ul>
          </nav>
        )}
      </header>
        
      <main>
        <section className="description-section">
          <p>Select this if you would like to fully customize your machine</p>
          <div className="build-rig">
            <h1>Build Your Own RIG</h1>
            <button className="start-btn">START</button>
          </div>
        </section>

        <section className="description-section">
          <p>Choose this if you prefer to purchase a ready-built performance system</p>
          <div className="buy-rig">
            <h1>Buy Ready Built RIG</h1>
            <button className="start-btn">START</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MenuPage;