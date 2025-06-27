// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl-bPboNIFZKlXb1Rg1ZNFlgwNDrelAwo",
  authDomain: "smartstudyhub-81d74.firebaseapp.com",
  projectId: "smartstudyhub-81d74",
  storageBucket: "smartstudyhub-81d74.firebasestorage.app",
  messagingSenderId: "279779762879",
  appId: "1:279779762879:web:8a578ff8ff3efde6605c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db ,auth};