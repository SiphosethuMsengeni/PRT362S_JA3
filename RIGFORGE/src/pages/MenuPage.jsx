import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link, useNavigate } from 'react-router-dom';
import '../Menu.css';
import '../SharedCss.css';
import { FiHome, FiSettings, FiUser, FiHelpCircle, FiLogOut, FiMenu, FiX, FiCpu, FiShoppingCart, FiTool, FiSearch, FiMonitor } from 'react-icons/fi';

const Menu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost/RigForge/RigForgeBackend/menu.php', {
          method: 'GET',
          credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
          setUser(data.user);
        } else {
          console.log('User not authenticated');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // We need logout logic here.
    console.log('Logging out...');
    navigate('/signup');
  };

  // if (loading) {
  //   return <div className="menu-page">Loading...</div>;
  // }

  return (
    <div className="menu-page">
      {/* Overlay for mobile when sidebar is open */}
      <div 
        className={`overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={toggleSidebar} 
      />

      {/* Navigation Bar */}
      <header className="menu-header">
        <button className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div>
          <Link to="/menu" className="nav-icon" title="Dashboard">
            <FiHome />
          </Link>
          <Link to="/profile" className="nav-icon" title="Profile">
            <FiUser />{user && user.username} {/*I still need to fix this or maybe delete it */}
          </Link>
          <Link to="/ready-built" className="nav-icon" title="Ready Built">
            <FiMonitor />
          </Link>
          <Link to="/repair" className="nav-icon" title="Repair">
            <FiTool />
          </Link>
        </div>

        {/* I still need to fix this (the next 3 lines) */}
        {user && (
          <span className="welcome-message">Welcome, {user.username}!</span>
        )}

        <div className="search-container">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products, parts, or services..." 
            className="search-input"
          />
        </div>

        <div className="menu-logo">
          RIG<span className="logo-accent">FORGE</span>
        </div>

        <div className="menu-header-spacer"></div>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          <Link to="/menu" className="sidebar-link" onClick={toggleSidebar}>
            <FiHome className="link-icon" />
            <span className="link-text">Dashboard</span>
          </Link>
          <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
            <FiUser className="link-icon" />
            <span className="link-text">Profile</span>
          </Link>
          <Link to="/ready-built" className="sidebar-link" onClick={toggleSidebar}>
            <FiMonitor className="link-icon" />
            <span className="link-text">Ready Built</span>
          </Link>
          <Link to="/repair" className="sidebar-link" onClick={toggleSidebar}>
            <FiTool className="link-icon" />
            <span className="link-text">Repair</span>
          </Link>
          <Link to="/settings" className="sidebar-link" onClick={toggleSidebar}>
            <FiSettings className="link-icon" />
            <span className="link-text">Settings</span>
          </Link>
          <Link to="/support" className="sidebar-link" onClick={toggleSidebar}>
            <FiHelpCircle className="link-icon" />
            <span className="link-text">Help & Support</span>
          </Link>
          <button className="sidebar-link logout-btn" onClick={handleLogout}>
            <FiLogOut className="link-icon" />
            <span className="link-text">Logout</span>
          </button>
        </div>
      </nav>

      <main className="menu-main-content">
          <h1 className="menu-main-title">Our Services</h1>
          <p className="menu-main-description">
            Everything you need for your PC journey. Build, buy, or repair - we've got you covered.
          </p>


        
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon">
              <FiCpu />
            </div>
            <h3>Build Your Own Rig</h3>
            <p>Select your parts and build your custom dream machine from the ground up.</p>
            <Link to="/build" className="menu-btn">Get Started</Link>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <FiShoppingCart />
            </div>
            <h3>Buy Ready-Built Computers</h3>
            <p>Choose from our selection of high-performance, ready-to-ship computers.</p>
            <Link to="/ready-built" className="menu-btn">Browse Computers</Link>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <FiTool />
            </div>
            <h3>Repair a PC</h3>
            <p>Diagnose issues and find solutions to get your computer running smoothly again.</p>
            <Link to="/repair" className="menu-btn">Find Help</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;