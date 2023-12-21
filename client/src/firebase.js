// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXLeCeS9N2JgzVIe7xLI_ATFVIUIR78w8",
  authDomain: "dnd-poll.firebaseapp.com",
  databaseURL: "https://dnd-poll-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dnd-poll",
  storageBucket: "dnd-poll.appspot.com",
  messagingSenderId: "946637325958",
  appId: "1:946637325958:web:937f9e430ece58c1cd3307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}