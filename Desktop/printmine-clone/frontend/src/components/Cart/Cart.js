import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item._id} className="flex justify-between items-center p-2 border-b">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p>Price: ₹{item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
