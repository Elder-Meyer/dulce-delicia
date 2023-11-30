// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOElTgeP-IB5CKhhpkl7Z_kVugUl4HZ70",
  authDomain: "dulce-delicia-b3afa.firebaseapp.com",
  projectId: "dulce-delicia-b3afa",
  storageBucket: "dulce-delicia-b3afa.appspot.com",
  messagingSenderId: "496979070853",
  appId: "1:496979070853:web:010ee91c8aa1af7edafeec",
  measurementId: "G-4G406Y0GQ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);


