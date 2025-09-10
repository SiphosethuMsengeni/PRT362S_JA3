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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword } = formData;

    if (!email || !username || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    //http://localhost:8000/signup.php

    try {
      const response = await fetch('http://localhost/RigForge/RigForgeBackend/signup.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({email, username, password}),
      });
      const data = await response.json();
      
      if (data.status === 'success') {
        setMessage('Signup was successful!');
        setTimeout(() =>navigate('/login'), 1500);
      } else {
        setMessage(data.message);
      }
    }
    catch (error) {
      setMessage(error.message);
    }

  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-logo">
          R I G<span style={{ color: '#F57A16' }}> F </span>O R G E
        </h1>
        <p className="signup-tagline">Create your account and start building your dream rig</p>

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