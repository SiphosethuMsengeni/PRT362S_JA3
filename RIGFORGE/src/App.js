import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Pages
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import BuildPage from './pages/BuildPage';
import ReadyBuiltPage from './pages/ReadyBuiltPage';
import ComponentViewPage from './pages/ComponentViewPage';
import ReviewPage from './pages/ReviewPage';
import CartPage from './pages/CartPage';
import RepairPage from './pages/RepairPage';

function AppWrapper() {
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

  // Called when form changes in BuildPage
  const updateForm = (newData) => {
    setForm(prev => ({ ...prev, ...newData }));
  };

  // Called when user confirms build review
  const goToReview = () => {
    navigate('/review');
  };

  // Called when user confirms review, go to cart
  const goToCart = () => {
    navigate('/cart');
  };

  // Navigate back if needed
  const goBackToBuild = () => {
    navigate('/build');
  };

  const goBackToReview = () => {
    navigate('/review');
  };

  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<WelcomePage />} />

      {/* Auth */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Navigation Menu */}
      <Route path="/menu" element={<MenuPage />} />

      {/* Main Actions */}
      <Route 
        path="/build" 
        element={
          <BuildPage 
            form={form} 
            onFormChange={updateForm} 
            onNext={goToReview} 
          />
        } 
      />
      <Route
        path="/ready-built"
        element={
          <ReadyBuiltPage
          />
        }
      />
      <Route
        path="/details/:id"
        element={
          <ComponentViewPage
          />
        }
      />
      <Route 
        path="/review" 
        element={
          <ReviewPage 
            form={form} 
            onEdit={goBackToBuild} 
            onConfirm={goToCart} 
          />
        } 
      />
      <Route 
        path="/cart" 
        element={
          <CartPage 
            form={form} 
            onBack={goBackToReview} 
          />
        } 
      />
      <Route path="/repair" element={<RepairPage />} />
    </Routes>
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
