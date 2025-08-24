import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const pcs = [
  {
    id: 1,
    name: 'Gaming Desktop',
    processor: 'Intel Core i9',
    ram: '32GB',
    storage: '1TB SSD',
    os: 'Windows 11',
  image: '/images/Gaming-Desktop.jpg'
  },
  {
    id: 2,
    name: 'Workstation Desktop',
    processor: 'AMD Ryzen 9',
    ram: '64GB',
    storage: '2TB SSD',
    os: 'Ubuntu 20.04',
  image: 'images/Workstation-Desktop.jpg'
  },
  {
    id: 3,
    name: 'Budget PC',
    processor: 'Intel Core i5',
    ram: '16GB',
    storage: '512GB SSD',
    os: 'Windows 10',
  image: '/Budget-PC.jpg'
  },
  {
    id: 4,
    name: 'Gaming PC',
    processor: 'AMD Ryzen 7',
    ram: '16GB',
    storage: '1TB SSD',
    os: 'Windows 11',
  image: '/Gaming-PC.jpg'
  },
  {
    id: 5,
    name: 'Ultrabook',
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB SSD',
    os: 'macOS Monterey',
  image: '/Ultrabook(MacBook).jpg'
  },
  {
    id: 6,
    name: 'Mini PC',
    processor: 'Intel Core i3',
    ram: '8GB',
    storage: '256GB SSD',
    os: 'Windows 10',
  image: '/Mini-PC.jpg'
  },
  {
    id: 7,
    name: 'Creator PC',
    processor: 'Intel Core i7',
    ram: '32GB',
    storage: '2TB NVMe SSD',
    os: 'Windows 11 Pro',
    image: '/Creator-PC.jpg'
  },
  {
    id: 8,
    name: 'Office Desktop',
    processor: 'Intel Core i5',
    ram: '8GB',
    storage: '1TB HDD',
    os: 'Windows 10 Pro',
    image: '/Office-Desktop.jpg'
  },
  {
    id: 9,
    name: 'High-End Gaming Rig',
    processor: 'AMD Ryzen 9 7950X',
    ram: '64GB DDR5',
    storage: '2TB NVMe SSD + 4TB HDD',
    os: 'Windows 11 Pro',
    image: '/High-End-Gaming-Desktop.jpg'
  },
  {
    id: 10,
    name: 'Portable Mini Workstation',
    processor: 'Apple M2',
    ram: '16GB',
    storage: '1TB SSD',
    os: 'macOS Ventura',
    image: '/portable-mini-workstation.jpg'
  }
];

const ReadyBuiltPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

   return (
       <div className="menu-page">
         <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
   
         <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
           <div className="sidebar-menu">
             <Link to="/ready-built" className="sidebar-link" onClick={toggleMenu}>
               <span className="link-icon">💻</span>
               <span className="link-text">Ready Built</span>
             </Link>
             <Link to="/repair" className="sidebar-link" onClick={toggleMenu}>
     <span className="link-icon">🛠️</span>
     <span className="link-text">Repair</span>
   </Link>
   
             <Link to="/cart" className="sidebar-link" onClick={toggleMenu}>
               <span className="link-icon">🛒</span>
               <span className="link-text">Cart</span>
             </Link>
             {/* Add logout functionality here if needed */}
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

      {/* Main Content */}
      <main className="main-section">
      <div className="pc-grid">
        {pcs.map((pc) => (
          <div key={pc.id} className="product-item">
            <img src={pc.image} alt={pc.name} className="pc-image"/>
            <div className="pc-details">
              <h2>{pc.name}</h2>
              <p><strong>Processor:</strong> {pc.processor}</p>
              <p><strong>RAM:</strong> {pc.ram}</p>
              <p><strong>Storage:</strong> {pc.storage}</p>
              <p><strong>OS:</strong> {pc.os}</p>
              <Link to={`/details/${pc.id}`}>
              <button className="view-button">VIEW</button> 
              </Link>
            </div>
          </div>
        ))}
      </div>
      </main>
          </div>
      </div>
  );
};

export default ReadyBuiltPage;