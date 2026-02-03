// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdH0Bd3I2hHQF0kWZlX0dD1MEdJXxVTY",
  authDomain: "my-portfolio-ffa81.firebaseapp.com",
  projectId: "my-portfolio-ffa81",
  storageBucket: "my-portfolio-ffa81.firebasestorage.app",
  messagingSenderId: "380623767216",
  appId: "1:380623767216:web:086ccee0cf9d246e801d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Example function to create a new user
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export default app;
// project-380623767216