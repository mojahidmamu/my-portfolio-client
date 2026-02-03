// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://my-portfolio-ffa81.firebaseapp.com/__/auth/handler

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_wXe1duUbbkcD8bWE0KF9VkByse9WgPk",
  authDomain: "bistro-boss-2aacc.firebaseapp.com",
  projectId: "bistro-boss-2aacc",
  storageBucket: "bistro-boss-2aacc.firebasestorage.app",
  messagingSenderId: "447374236780",
  appId: "1:447374236780:web:0fd1c2f581720f6537cc49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
