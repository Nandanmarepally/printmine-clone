import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-2 rounded" />
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </Link>
    </div>
  );
}
