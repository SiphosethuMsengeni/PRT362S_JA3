import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import BuildPage from './pages/BuildPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Auth */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Navigation Menu */}
        <Route path="/menu" element={<MenuPage />} />

        {/* Main Actions */}
        <Route path="/build" element={<BuildPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App; 