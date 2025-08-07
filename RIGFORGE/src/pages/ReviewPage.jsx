import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedComponents = location.state?.selectedComponents || [];

  const handleAddToCart = () => {
    // You can save to localStorage or state management (like Redux)
    // For now, we just redirect to cart with selected items
    navigate('/cart', { state: { cartItems: selectedComponents } });
  };

  return (
    <div className="review-page">
      <h2>🛠️ Review Your Custom Build</h2>

      {selectedComponents.length === 0 ? (
        <p>No components selected.</p>
      ) : (
        <div className="component-list">
          {selectedComponents.map((component, index) => (
            <div key={index} className="component-card">
              <img src={component.image} alt={component.name} width="100" />
              <div>
                <h3>{component.name}</h3>
                <p>Type: {component.type}</p>
                <p>Price: R{component.price}</p>
              </div>
            </div>
          ))}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
