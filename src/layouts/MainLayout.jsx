import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Welcomer from "../components/Welcomer";

function MainLayout({user, onLogout}) {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);

  const toggleMenu = () => setHamMenuOpen((prev) => !prev);

  useEffect(() => {
    const closeSidebar = (e) => {
      if (!e.target.closest("#sidebar") && !e.target.closest("#hamburger")) {
        setHamMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", closeSidebar);
    return () => document.removeEventListener("mousedown", closeSidebar);
  }, []);

  return (
    <div className="relative">
      <Sidebar isOpen={hamMenuOpen} onClose={() => setHamMenuOpen(false)} />
      <Welcomer user={user} onLogout={onLogout} toggleMenu={toggleMenu} />
      <Navbar user={user} onLogout={onLogout} toggleMenu={toggleMenu} />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;