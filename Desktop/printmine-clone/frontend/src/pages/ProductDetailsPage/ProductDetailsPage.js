import React from 'react';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ productId }) => {
  const product = {
    id: productId,
    name: 'Sample Product',
    description: 'This is a detailed description of the product.',
    price: 100,
    image: 'product-image-url',
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
