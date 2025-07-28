function Welcomer({user, onLogout, toggleMenu}) {
  return (
    <div className="bg-white rounded-xl shadow-md px-6 py-4 flex items-center justify-between w-full mb-6 relative">
      <div className="flex items-center gap-4">
        <button id="hamburger" onClick={toggleMenu} className="text-gray-700 text-2xl">☰</button>
        <h1 className="text-lg font-semibold text-blue-600">Welcome, {user.displayName}!</h1>
      </div>
        <button onClick={onLogout} className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
          Sign Out
        </button>
    </div>
  )
}

export default Welcomer;