import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">PrintMine</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600 font-medium">
            Cart
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600 font-medium">
            Signup
          </Link>
        </div>

      </div>
    </nav>
  );
}
