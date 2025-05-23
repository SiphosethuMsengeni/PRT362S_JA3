import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Pages
const WelcomePage = () => (
  <div className="page">
    <h1 className="logo">RIG<span style={{ color: '#F57A16' }}>F</span>ORGE</h1>
    <p className="tagline">UNLEASH YOUR INNER BUILDER WITH RIGFORGE</p>
    <Link to="/signup" className="btn">SIGN UP</Link>
    <p className="footer-text">
      Already registered? <Link to="/login" className="link">Login</Link>
    </p>
  </div>
);

const SignUpPage = () => (
  <div className="page">
    <h1 className="logo">RIG<span style={{ color: '#F57A16' }}>F</span>ORGE</h1>
    <form className="form">
      <input type="email" placeholder="Enter Email" required />
      <input type="text" placeholder="Enter Username" required />
      <input type="password" placeholder="Create Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit" className="btn">SUBMIT</button>
    </form>
  </div>
);

const LoginPage = () => (
  <div className="page">
    <h1 className="logo">RIG<span style={{ color: '#F57A16' }}>F</span>ORGE</h1>
    <form className="form">
      <input type="email" placeholder="Enter Email" required />
      <input type="password" placeholder="Enter Password" required />
      <button type="submit" className="btn">LOGIN</button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
