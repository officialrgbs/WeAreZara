import { Route, Routes, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase"

import Home from "./pages/Home"
import About from "./pages/About"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar"
import Denied from "./pages/Denied"
import SchoolDays from "./pages/SchoolDays"
import Resources from "./pages/Resources"

import MainLayout from "./layouts/MainLayout"

import { WHITELISTED_EMAILS } from "./whitelisted_emails"

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        if (WHITELISTED_EMAILS.includes(firebaseUser.email)) {
          setUser(firebaseUser);
          console.log("Logged in as", firebaseUser.email);
        } else {
          console.warn("Access denied for: ", firebaseUser.email);
          signOut(auth);
          setAccessDenied(true);
        }
      } else {
        console.log("No user logged in.")
      }
      setLoading(false);
    })

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setAccessDenied(false);
  }

  if (loading) return <p>Loading...</p>
  if (accessDenied) return <p>Your email is not recognized.</p>

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Routes>
        <Route path="/auth" element={
          accessDenied
            ? <Navigate to="/denied" replace />
            : user 
              ? <Navigate to="/" replace />
              : <Auth />
        } />
        <Route path="/denied" element={<Denied />} />
        
        {/* Modifiable Routes */}
        <Route element={<MainLayout user={user} onLogout={handleLogout} />}>
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Route>

        {/* Protected Routes inside MainLayout */}
        {user && (
          <Route element={<MainLayout user={user} onLogout={handleLogout} />}>
            <Route path="/" element={<Home />} />
            <Route path="/school-days" element={<SchoolDays />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to={user ? "/" : "/auth"} replace />} />

      </Routes>
    </div>
  )
}

export default App
