/* This code snippet is a JavaScript file named `firebaseConfig.js` that sets up Firebase
authentication in a web application using the Firebase SDK. Here's a breakdown of what it does: */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDTKnbZNgAgAOzpP_DdhnMT6zw2gKAM4e0",
  authDomain: "sambhav-7560d.firebaseapp.com",
  projectId: "sambhav-7560d",
  storageBucket: "sambhav-7560d.appspot.com",
  messagingSenderId: "764543924115",
  appId: "1:764543924115:web:e54a787049af02d56eda66",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
export const db = getFirestore(app);

// Export both app and auth
export { app, auth };
