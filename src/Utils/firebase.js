//Firebase Functions run backend code only when needed, without managing a server.

// for initialize Firebase in your project
import firebase from "firebase/compat/app";

// handle authentication services (e.g., login, signup)
import { getAuth } from "firebase/auth";

// backward compatibility with older Firebase versions.
import "firebase/compat/auth";

// handle Firestore database
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhxd_1nk-2iHfpwIgpkUIpgZ9GhcIaE_A",
  authDomain: "clone-39f6b.firebaseapp.com",
  projectId: "clone-39f6b",
  storageBucket: "clone-39f6b.firebasestorage.app",
  messagingSenderId: "119581928242",
  appId: "1:119581928242:web:d3d2948dfe5cc43f45452b",
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Firestore database
export const db = app.firestore();
