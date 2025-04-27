import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

// Place order
export const placeOrder = async (req, res) => {
  const userId = req.user._id;
  const { address, paymentMethod } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Calculate total price (assuming product prices are populated)
    const totalPrice = cart.products.reduce((acc, item) => {
      return acc + (item.productId.price * item.quantity);
    }, 0);

    const newOrder = new Order({
      userId,
      products: cart.products.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      address,
      paymentMethod,
      totalPrice,
      status: 'Pending',
    });

    await newOrder.save();

    // Empty the cart after successful order
    await Cart.findOneAndUpdate({ userId }, { products: [] });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's orders
export const getOrders = async (req, res) => {
  const userId = req.user._id;

  try {
    const orders = await Order.find({ userId }).populate('products.productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
