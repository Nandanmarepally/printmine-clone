import { useState } from 'react';

export default function CheckoutForm() {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Placed with address:', address);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter your shipping address"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
        Place Order
      </button>
    </form>
  );
}
