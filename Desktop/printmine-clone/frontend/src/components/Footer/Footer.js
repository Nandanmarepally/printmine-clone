export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          &copy; {new Date().getFullYear()} PrintMine. All rights reserved.
        </div>
      </footer>
    );
  }
  