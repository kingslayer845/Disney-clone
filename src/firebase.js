// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPBIy4fgxXlcVE-HTFC3ms599d08aBIpU",
  authDomain: "disneyplus-clone-c9c19.firebaseapp.com",
  projectId: "disneyplus-clone-c9c19",
  storageBucket: "disneyplus-clone-c9c19.appspot.com",
  messagingSenderId: "238343725637",
  appId: "1:238343725637:web:cdda2501184e554ae7792c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, storage, provider, signOut };

export default db;
