import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com'; // Replace with your actual API URL

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ----------------- Product API --------------------

// Get product details by product ID
export const getProductDetails = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data; // Return the product data from the response
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

// Get a list of products (e.g., for the homepage or product listing)
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data; // Return the list of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// ----------------- User Authentication API --------------------

// User login
export const userLogin = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data; // Return user login data (e.g., JWT token)
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// User signup
export const userSignup = async (name, email, password) => {
  try {
    const response = await api.post('/signup', { name, email, password });
    return response.data; // Return user signup data (e.g., success message or user data)
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

// ----------------- Cart API --------------------

// Add item to cart
export const addItemToCart = async (productId, quantity) => {
  try {
    const response = await api.post('/cart', { productId, quantity });
    return response.data; // Return updated cart data
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// Remove item from cart
export const removeItemFromCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/${productId}`);
    return response.data; // Return updated cart data after removing the item
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

// ----------------- Checkout API --------------------

// Checkout (Place an order)
export const checkout = async (cartItems, billingDetails) => {
  try {
    const response = await api.post('/checkout', { cartItems, billingDetails });
    return response.data; // Return order details or confirmation
  } catch (error) {
    console.error('Error during checkout:', error);
    throw error;
  }
};
