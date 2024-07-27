// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_1K7se9sncvDvn4_8xAmLp_-R_n2neck",
  authDomain: "cfg-47.firebaseapp.com",
  projectId: "cfg-47",
  storageBucket: "cfg-47.appspot.com",
  messagingSenderId: "424857338102",
  appId: "1:424857338102:web:bbc9fb08d2ae9621e16cd7",
  measurementId: "G-8R8XN8DBYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}