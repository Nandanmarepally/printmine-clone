import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded mb-6" />
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <p className="text-2xl font-semibold text-green-700 mb-6">₹{product.price}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
