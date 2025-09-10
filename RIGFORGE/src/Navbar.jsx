import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'Home', path: '/', icon: '🏠' }, 
    { label: 'Build', path: '/build', icon: '🛠️' },
    { label: 'Ready Build', path: '/ready-built', icon: '✅' }, // ✅ corrected path
    { label: 'Repair', path: '/repair', icon: '💻' },
    { label: 'Cart', path: '/cart', icon: '🛒' },
    { label: 'Checkout', path: '/checkout', icon: '💳' },
    { label: 'Logout', path: '/login', icon: '🚪' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        padding: '0.5rem 0',
        color: '#fff',
        zIndex: 1000,
      }}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => navigate(tab.path)}
          style={{
            cursor: 'pointer',
            textAlign: 'center',
            color: location.pathname === tab.path ? '#f57b0a' : '#fff',
          }}
        >
          <div style={{ fontSize: '1.5rem' }}>{tab.icon}</div>
          <div style={{ fontSize: '0.75rem' }}>{tab.label}</div>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;