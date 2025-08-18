import React from 'react';

const CheckoutPage = ({ form, onBack }) => {
  const handleConfirm = () => {
    alert('Purchase confirmed! Thank you.');
  };

  return (
    <div className="checkout-page">
      <h2>🛒 Checkout</h2>
      <p>Review your order:</p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <button onClick={onBack} className="btn-back">Back to Cart</button>
      <button onClick={handleConfirm} className="btn-confirm">Confirm Purchase</button>
    </div>
  );
};

export default CheckoutPage;
