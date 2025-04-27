import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Handle order placement
    console.log('Order placed with details:', billingDetails);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={billingDetails.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={billingDetails.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={billingDetails.paymentMethod}
            onChange={handleChange}
            className="input-field"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="button" onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
