// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ieP5TI9ycnD0FMwflNEDVqlV_8KRlGI",
  authDomain: "tinder-rn-dad20.firebaseapp.com",
  projectId: "tinder-rn-dad20",
  storageBucket: "tinder-rn-dad20.appspot.com",
  messagingSenderId: "513946308441",
  appId: "1:513946308441:web:e241416a1d33ae61bcc648",
  measurementId: "G-84SRBY4HVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
