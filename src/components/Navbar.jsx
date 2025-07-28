import { Link, useLocation } from "react-router-dom";
import "../index.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 border border-gray-300 flex gap-2 z-50">
      <Link to="/" className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
          location.pathname === "/" ? "bg-gray-200 font-semibold" : "bg-transparent"
        }`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link> 
      <Link to="/resources" className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
        location.pathname === "/resources" ? "bg-gray-200 font-semibold" : "bg-transparent"
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </Link>
      <Link to="/about" className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
        location.pathname === "/about" ? "bg-gray-200 font-semibold" : "bg-transparent"
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      </Link>
    </nav>
  )
}

export default Navbar;