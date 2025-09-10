import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Build.css';
import '../SharedCss.css';
import { 
  FiHome, FiSettings, FiUser, FiHelpCircle, FiLogOut, FiMenu, FiX,
  FiTool, FiSearch, FiMonitor, FiArrowLeftCircle, FiLayers, FiBox, 
  FiDatabase, FiServer, FiWind, FiWifi, FiHardDrive, FiType, 
  FiMousePointer, FiCpu, FiFilter, FiGrid, FiList
} from 'react-icons/fi';

const Build = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cpu');
  const [parts, setParts] = useState({});
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();


  const categories = [
    { id: 'cpu', name: 'CPU', icon: <FiCpu size={20} /> },
    { id: 'motherboard', name: 'Motherboard', icon: <FiServer size={20} /> },
    { id: 'case', name: 'Case', icon: <FiBox size={20} /> },
    { id: 'cooler', name: 'Cooler', icon: <FiWind size={20} /> },
    { id: 'gpu', name: 'GPU', icon: <FiLayers size={20} /> },
    { id: 'network', name: 'Network', icon: <FiWifi size={20} /> },
    { id: 'ram', name: 'RAM', icon: <FiDatabase size={20} /> },
    { id: 'storage', name: 'Storage', icon: <FiHardDrive size={20} /> },
    { id: 'monitor', name: 'Monitor', icon: <FiMonitor size={20} /> },
    { id: 'keyboard', name: 'Keyboard', icon: <FiType size={20} /> },
    { id: 'mouse', name: 'Mouse', icon: <FiMousePointer size={20} /> }
  ];

  
  const API_BASE_URL = 'http://localhost/RigForge/RigForgeBackend/CustomBuildAPI';


  const fetchPartsByCategory = async (category) => {
    try {
      const response = await fetch(`${API_BASE_URL}/parts/get_parts.php?category=${category}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.success ? data.parts : [];
    } catch (error) {
      console.error('Error fetching parts:', error);
      return [];
    }
  };


  useEffect(() => {
    const loadParts = async () => {
      setLoading(true);
      try {
        const partsData = {};
        
        const categoriesWithData = ['cpu', 'gpu', 'motherboard', 'ram'];
        
        for (const category of categoriesWithData) {
          const categoryParts = await fetchPartsByCategory(category);
          partsData[category] = categoryParts;
        }
        
        categories.forEach(cat => {
          if (!partsData[cat.id]) {
            partsData[cat.id] = [];
          }
        });
        
        setParts(partsData);
      } catch (error) {
        console.error('Error loading parts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadParts();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/signup');
  };

  const renderPartCard = (part) => (
    <div key={part.id} className="part-card">
      <div className="part-image">
        <img 
          src={part.image_url} 
          alt={part.name}
          onError={(e) => {
            e.target.src = 'https://placehold.net/400x400.png';
          }}
        />
      </div>
      <div className="part-info">
        <h3>{part.name}</h3>
        <p className="part-specs">{part.specs}</p>
        <p className="part-details">{part.details}</p>
        <p className="part-brand">{part.brand}</p>
        <p className="part-price">{part.price}</p>
      </div>
      <button className="add-to-build-btn">Add to Build</button>
    </div>
  );

  const renderPartList = (part) => (
    <div key={part.id} className="part-list-item">
      <div className="part-image">
        <img 
          src={part.image_url} 
          alt={part.name}
          onError={(e) => {
            e.target.src = 'https://placehold.net/400x400.png';
          }}
        />
      </div>
      <div className="part-details">
        <h3>{part.name}</h3>
        <p className="part-specs">{part.specs}</p>
        <p className="part-details">{part.details}</p>
        <p className="part-brand">{part.brand}</p>
      </div>
      <div className="part-action">
        <p className="part-price">{part.price}</p>
        <button className="add-to-build-btn">Add</button>
      </div>
    </div>
  );

  return (
    <div className="build-page">
      <div 
        className={`overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={toggleSidebar} 
      />

      {/* Main Navigation Bar */}
      <header className="menu-header">
        <button className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="header-nav-icons">
          <Link to="/menu" className="nav-icon" title="Back to Dashboard">
            <FiArrowLeftCircle />
          </Link>
          <Link to="/menu" className="nav-icon" title="Dashboard">
            <FiHome />
          </Link>
          <Link to="profile" className="nav-icon" title="Profile">
            <FiUser />
          </Link>
          <Link to="ready-built" className="nav-icon" title="Ready Built">
            <FiMonitor />
          </Link>
          <Link to="repair" className="nav-icon" title="Repair">
            <FiTool />
          </Link>
        </div>

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

      {/* Builder Navigation - Icon-only sliding bar */}
      <div className="builder-nav-container" style={{marginTop: '3rem'}}>
        <div className="nav-scroll-container">
          <ul className="nav-items">
            {categories.map(category => (
              <li 
                key={category.id}
                className={`nav-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                title={category.name}
              >
                {category.icon}
                <span className="category-name">{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Component Sections Container */}
      <main className="build-main-container">
        {categories.map(category => (
          <section 
            key={category.id} 
            className={`component-section ${activeCategory === category.id ? 'active' : ''}`}
          >
            {/* Section Header with Controls */}
            <div className="section-header">
              <h2>Select {category.name}</h2>
              <div className="section-controls">
                <button className="filter-btn" title="Filter">
                  <FiFilter />
                </button>
                <button 
                  className="view-toggle-btn" 
                  onClick={toggleViewMode}
                  title={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}
                >
                  {viewMode === 'grid' ? <FiList /> : <FiGrid />}
                </button>
              </div>
            </div>

            {/* Parts Container */}
            <div className={`parts-container ${viewMode}-view`}>
              {loading ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Loading {category.name} options...</p>
                </div>
              ) : parts[category.id] && parts[category.id].length > 0 ? (
                viewMode === 'grid' ? (
                  <div className="parts-grid">
                    {parts[category.id].map(part => renderPartCard(part))}
                  </div>
                ) : (
                  <div className="parts-list">
                    {parts[category.id].map(part => renderPartList(part))}
                  </div>
                )
              ) : (
                <div className="empty-state">
                  <p>No {category.name} parts found.</p>
                  <p>Check back later or try a different category.</p>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          <Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>
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
    </div>
  );
};

export default Build;