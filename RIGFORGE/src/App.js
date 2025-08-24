// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import BuildPage from './pages/BuildPage';
import ReadyBuiltPage from './pages/ReadyBuiltPage';
import ComponentViewPage from './pages/ComponentViewPage';
import ReviewPage from './pages/ReviewPage';
import CartPage from './pages/CartPage';
import RepairPage from './pages/RepairPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './pages/Navbar';

function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    useType: '',
    cpu: '',
    gpu: '',
    caseType: '',
    storage: '',
    ram: '',
    adapter: '',
    monitor: '',
    extras: '',
    budget: '',
    contactMethod: '',
  });

  const navigate = useNavigate();

  // Login & Logout handlers
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/about');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Update form state
  const updateForm = (newData) => setForm(prev => ({ ...prev, ...newData }));

  // Navigation handlers
  const goToReview = () => navigate('/review');
  const goBackToBuild = () => navigate('/build');
  const goBackToReadyBuiltPage = () => navigate('/ready-built');
  const goBackToReview = () => navigate('/review');
  const goToCart = () => navigate('/cart');
  const goToCheckout = () => navigate('/checkout');

  return (
    <div style={{ paddingBottom: isLoggedIn ? '60px' : '0' }}>
      <Routes>
        {/* Landing & Auth */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Main Actions */}
        <Route
          path="/build"
          element={<BuildPage form={form} onFormChange={updateForm} onNext={goToReview} />}
        />
        <Route
          path="/ready-built"
          element={<ReadyBuiltPage onBack={goBackToReadyBuiltPage} />}
        />
        <Route path="/details/:id" 
        element={<ComponentViewPage />} 
        />
        <Route
          path="/review"
          element={<ReviewPage form={form} onEdit={goBackToBuild} onConfirm={goToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage form={form} onBack={goBackToReview} onCheckout={goToCheckout} />}
        />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/checkout" element={<CheckoutPage form={form} />} />
      </Routes>

      {/* Navbar only visible after login */}
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;