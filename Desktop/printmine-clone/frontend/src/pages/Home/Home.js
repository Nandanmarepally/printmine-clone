import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/api';
import './Home.css';

const Home = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };
    fetchProducts();
  }, []);

  const handleShopNowClick = () => {
    setShowProducts(true);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <p>Explore our wide range of products!</p>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />
      <button className="shop-now-button" onClick={handleShopNowClick}>
        Shop Now
      </button>

      {showProducts && (
        <div className="product-list">
          <h2>Our Products</h2>
          <div className="product-items">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
