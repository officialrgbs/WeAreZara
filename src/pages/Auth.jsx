import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Auth({ onLogin }) {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google login error", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-blue-600">
          Login with Google
        </h1>
        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center gap-2 font-medium rounded-lg text-base px-6 py-3 w-full bg-[#374151] text-white hover:bg-gray-700 transition duration-200 shadow"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 488 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M488 261.8C488 403.3 391.5 504 248 504 110.8 504 8 401.2 8 264S110.8 24 248 24c66.8 0 123 24.6 166.5 64.9l-67.6 64.9C314.4 119.8 285.5 112 248 112c-77.7 0-140.8 65.7-140.8 152s63.1 152 140.8 152c71.5 0 116.7-51.3 121.7-97.7H248v-78.1h240z" />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Auth;
