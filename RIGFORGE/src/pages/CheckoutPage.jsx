import React from "react";
import '../App.css';
import gamingDesktop from "../images/Gaming-Desktop.jpg"; // adjust the path if needed

const CheckoutPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Title */}
        <h1 className="cart-title">Your Cart</h1>

        {/* Cart Item */}
        <div className="cart-details">
  {/* Left Column */}
  <div className="cart-items-column">
    <div className="cart-item">
      <img
        src={gamingDesktop}
        alt="Gaming Desktop"
        className="cart-item-image"
      />
      <div className="cart-item-info">
              <h2>Gaming-Desktop</h2>
              <p>Intel Core i9, 32GB</p>
              <p>Windows 11</p>
        <div className="quantity-selector">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <p className="price">
          R3348.00 <span className="remove">REMOVE</span>
        </p>
      </div>
    </div>

    {/* Promotions */}
    <div className="promo">
      <p>➤ Add promotion code</p>
    </div>
  </div>

  {/* Right Column */}
  <div className="cart-summary-column">
    <div className="summary">
      <h3>Summary</h3>
      <p>Free standard shipping South Africa wide</p>
      <p>
        Pay with: <br />
        ✔ Credit / Debit Card
        <br />
        ✔ Samsung Pay
      </p>
      <p>GST (7% included): R22.77</p>
      <p>
        <strong>Total: R3348.00</strong>
      </p>
    </div>

    {/* Buttons */}
    <div className="cart-buttons">
      <button className="back-btn">Continue Shopping</button>
      <button className="checkout-btn">Checkout</button>
    </div>
    </div>
    </div>
  </div>
</div>
  );
};

export default CheckoutPage;
