import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNFotdbnUqY2C2_WVGtMe5pqYuUc6w1Ew",
  authDomain: "wearezara-d0613.firebaseapp.com",
  projectId: "wearezara-d0613",
  storageBucket: "wearezara-d0613.firebasestorage.app",
  messagingSenderId: "475179521587",
  appId: "1:475179521587:web:55cd1d1e0114b32e6cf546",
  measurementId: "G-REVFR22TWT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
