import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

// B
const handleSubmit = async (e) => {
  e.preventDefault();

      if (!email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

  try {
    const response = await fetch('http://localhost/RigForge/RigForgeBackend/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'success') {
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/menu');
    } else {
      setMessage(data.message);
    }

  } catch (error) {
    console.error('Login error:', {
      message: error.message,
      stack: error.stack,
    });
    alert('Network error. Check console.');
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