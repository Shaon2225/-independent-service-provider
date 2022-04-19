// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdgsTSN7GRNaVJTRYVfVD7mWv6Z60yTn8",
  authDomain: "photo-vision-1165e.firebaseapp.com",
  projectId: "photo-vision-1165e",
  storageBucket: "photo-vision-1165e.appspot.com",
  messagingSenderId: "211251470353",
  appId: "1:211251470353:web:91d8e4409e0329880651b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth