import { Link, useLocation } from "react-router-dom";
import "../index.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 border border-gray-300 flex gap-6 z-50">
      <Link to="/" className={`px-4 py-2 rounded-full ${
        location.pathname === "/" ? "bg-gray-200 font-semibold" : ""
      }`}>Home</Link> 
      <Link to="/about" className={`px-4 py-2 rounded-full ${
        location.pathname === "/about" ? "bg-gray-200 font-semibold" : ""
      }`}>About</Link>
    </nav>
  )
}

export default Navbar;