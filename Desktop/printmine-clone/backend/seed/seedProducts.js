import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import connectDB from '../config/db.js';

// Sample Product Data
const products = [
  {
    name: 'Custom Printed T-Shirt',
    description: 'High-quality cotton t-shirt with custom print.',
    price: 499,
    image: '/images/tshirt1.jpg', // You can later upload real images
    category: 'Clothing',
    countInStock: 50,
  },
  {
    name: 'Personalized Coffee Mug',
    description: 'Ceramic mug with your custom text or photo.',
    price: 299,
    image: '/images/mug1.jpg',
    category: 'Accessories',
    countInStock: 100,
  },
  {
    name: 'Customized Phone Case',
    description: 'Protect your phone with a stylish custom case.',
    price: 399,
    image: '/images/phonecase1.jpg',
    category: 'Electronics',
    countInStock: 75,
  },
  {
    name: 'Printed Canvas Tote Bag',
    description: 'Eco-friendly tote bag with your custom design.',
    price: 249,
    image: '/images/bag1.jpg',
    category: 'Accessories',
    countInStock: 60,
  }
];

// Main seeding function
const seedProducts = async () => {
  try {
    await connectDB();

    // Delete existing products first
    await Product.deleteMany();

    // Insert sample products
    const createdProducts = await Product.insertMany(products);

    console.log('✅ Sample Products Seeded Successfully!');
    process.exit(); // Exit after seeding
  } catch (error) {
    console.error('❌ Error while seeding products:', error);
    process.exit(1); // Exit with failure
  }
};

// Run seeding
dotenv.config();
seedProducts();
