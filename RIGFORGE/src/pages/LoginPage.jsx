import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = 'siphosethu.msengeni@masinyusane.org';
    const validPassword = '1829@Sethu';

    if (email === validEmail && password === validPassword) {
      setMessage('✅ Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/menu'); // ✅ Redirect to MenuPage instead of BuildPage
      }, 1500);
    } else {
      setMessage('❌ Invalid email or password.');
    }
  };

  return (
    <div className="login-page">
      <div className="signup-container">
        <h1 className="signup-logo">RIG<span style={{ color: '#F57A16' }}>F</span>ORGE</h1>
        <p className="signup-tagline">Welcome back, please log in to continue.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn">LOGIN</button>
        </form>

        {message && <p style={{ marginTop: '1rem', color: 'white' }}>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
