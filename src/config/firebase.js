import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxwgAm1EcZyIu3pDvFZIv5zR1h_vUsLH4",
  authDomain: "ucampc10tulio.firebaseapp.com",
  projectId: "ucampc10tulio",
  storageBucket: "ucampc10tulio.appspot.com",
  messagingSenderId: "418513888701",
  appId: "1:418513888701:web:14610c992be967d7369ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);