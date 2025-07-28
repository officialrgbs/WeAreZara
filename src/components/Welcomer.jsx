import { useNavigate } from "react-router-dom";

function Welcomer({user, onLogout, toggleMenu}) {
  const navigate = useNavigate();  

  if (!user) return null;

  const firstName = user.displayName?.split(" ")[0] || "User";

  const goToProfile = () => {
    navigate("/profile");
  }

  return (
    <div className="bg-white rounded-xl shadow-md px-6 py-4 flex items-center justify-between w-full mb-6 relative">
      <div className="flex items-center gap-4">
        <button id="hamburger" onClick={toggleMenu} className="text-gray-700 text-2xl">☰</button>
        <h1 className="text-lg font-semibold text-blue-600">Welcome, {firstName}!</h1>
      </div>
        <button onClick={goToProfile} className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
    </div>
  )
}

export default Welcomer;