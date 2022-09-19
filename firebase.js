// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBZxvOJ9grMaJfW22iCNdLb0jIuX-ib928",
  authDomain: "netflix-e4ca0.firebaseapp.com",
  projectId: "netflix-e4ca0",
  storageBucket: "netflix-e4ca0.appspot.com",
  messagingSenderId: "987312856847",
  appId: "1:987312856847:web:c4dec9c92cf789fe74e87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, db, storage };