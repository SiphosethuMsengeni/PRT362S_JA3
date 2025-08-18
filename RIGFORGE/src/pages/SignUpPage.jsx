import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword } = formData;

    if (!email || !username || !password || !confirmPassword) {
      setMessage('⚠️ Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    // ✅ Save user in localStorage
    const user = { email, username, password };
    localStorage.setItem('user', JSON.stringify(user));

    setMessage('✅ Account created! Redirecting to login...');

    setTimeout(() => {
      navigate('/login'); 
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-logo">
          RIG<span style={{ color: '#F57A16' }}>F</span>ORGE
        </h1>
        <p className="signup-tagline">Create your account and start building your dream rig.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
          <button type="submit" className="signup-btn">SUBMIT</button>
        </form>

        {message && <p style={{ marginTop: '1rem', color: 'white' }}>{message}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
