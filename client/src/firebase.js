// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from '/firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCclE2IZ62_dXNJuVmvVHF1oWVoI-PK5Ak",
  authDomain: "dndproject-39dcd.firebaseapp.com",
  projectId: "dndproject-39dcd",
  storageBucket: "dndproject-39dcd.appspot.com",
  messagingSenderId: "720140716812",
  appId: "1:720140716812:web:52f9024f8f6da8a3291729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export {db}