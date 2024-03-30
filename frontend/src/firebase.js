// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-login-79518.firebaseapp.com",
  projectId: "mern-login-79518",
  storageBucket: "mern-login-79518.appspot.com",
  messagingSenderId: "341798339191",
  appId: "1:341798339191:web:5a9ab03fedda57b2837c72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);