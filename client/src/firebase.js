// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-91c62.firebaseapp.com",
  projectId: "mern-blog-91c62",
  storageBucket: "mern-blog-91c62.appspot.com",
  messagingSenderId: "803068179363",
  appId: "1:803068179363:web:b849fa9d97feddaaad6016",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
