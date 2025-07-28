import { Link } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300 shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/school-days" className="text-blue-600 hover:underline">School Days</Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-30 z-40 backdrop-blur-sm" onClick={onClose}></div>
      )}
    </>
  )
}

export default Sidebar;