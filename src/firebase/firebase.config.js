// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  PhoneAuthProvider
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://my-portfolio-ffa81.firebaseapp.com/__/auth/handler

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdH0Bd3I2hHQF0kWZlX0dD1MEdJXxVTY",
  authDomain: "my-portfolio-ffa81.firebaseapp.com",
  projectId: "my-portfolio-ffa81",
  storageBucket: "my-portfolio-ffa81.firebasestorage.app",
  messagingSenderId: "380623767216",
  appId: "1:380623767216:web:5ac004e8f2b55b34801d75",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const phoneProvider = new PhoneAuthProvider();  