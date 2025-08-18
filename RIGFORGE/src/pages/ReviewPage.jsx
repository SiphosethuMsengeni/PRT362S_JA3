import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ReviewPage = ({ form, onEdit }) => {
  const [editHover, setEditHover] = useState(false);
  const [confirmHover, setConfirmHover] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert('Build confirmed! Redirecting to cart...');
    navigate('/cart', { state: { build: form } });
  };

  return (
    <div className="review-page">
      <div className="review-page-container">
        <h2 className="review-title">🛠️ Review Your Custom Build 🛠️</h2>
        <div className="review-details">
          <p>👤 <strong>Name:</strong> {form.name}</p>
          <p>📧 <strong>Email:</strong> {form.email}</p>
          <p>📞 <strong>Contact Number:</strong> {form.contact}</p>
          <p>💼 <strong>Use Type:</strong> {form.useType}</p>
          <p>🖥️ <strong>CPU Preference:</strong> {form.cpu}</p>
          <p>🎮 <strong>GPU Preference:</strong> {form.gpu}</p>
          <p>🖥️ <strong>Case Type:</strong> {form.caseType}</p>
          <p>💾 <strong>Storage Space:</strong> {form.storage}</p>
          <p>⚡ <strong>RAM:</strong> {form.ram}</p>
          <p>📡 <strong>Wireless Adapter:</strong> {form.adapter || 'None'}</p>
          <p>🖱️ <strong>Monitor/Keyboard/Mouse Needs:</strong> {form.monitor || 'None'}</p>
          <p>❄️ <strong>Additional Info:</strong> {form.extras || 'None'}</p>
          <p>💰 <strong>Budget:</strong> {form.budget || 'Not specified'}</p>
          <p>☎️ <strong>Preferred Contact Method:</strong> {form.contactMethod}</p>
        </div>

        <div className="review-buttons">
          <button
            className={`edit-btn ${editHover ? 'hover' : ''}`}
            onMouseEnter={() => setEditHover(true)}
            onMouseLeave={() => setEditHover(false)}
            onClick={onEdit}
          >
            ✏️ Edit
          </button>
          <button
            className={`confirm-btn ${confirmHover ? 'hover' : ''}`}
            onMouseEnter={() => setConfirmHover(true)}
            onMouseLeave={() => setConfirmHover(false)}
            onClick={handleConfirm}
          >
            ✅ Confirm Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
