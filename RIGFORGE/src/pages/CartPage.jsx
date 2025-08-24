import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ form, onBack }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { build: form } });
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Cart Summary 🛒</h2>

        <div className="cart-details">
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

        <div className="cart-buttons">
          <button className="back-btn" onClick={onBack}>
            ← Back to Review
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            💳 Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
