import { useOutletContext } from "react-router-dom";

function Profile() {
  const {user, onLogout} = useOutletContext();

  return(
    <div className="bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">
        {user.displayName}
      </h1>
      <p className="text-gray-600 mb-6">{user.email}</p>

      <button onClick={onLogout} className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-lg">
        Sign Out
      </button>
    </div>
  )
}

export default Profile;