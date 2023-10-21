// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCkEl128BW7mOPgOm0mag-LrgkHTStPUs",
  authDomain: "fir-todo-36ee8.firebaseapp.com",
  projectId: "fir-todo-36ee8",
  storageBucket: "fir-todo-36ee8.appspot.com",
  messagingSenderId: "908559298373",
  appId: "1:908559298373:web:3352e3882dd2715f55d82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;