// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// for authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
