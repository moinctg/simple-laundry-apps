
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA93X5YQbdcHSmzbkbHUau99UANVKl3t-A",
  authDomain: "simple-laundry-apps.firebaseapp.com",
  projectId: "simple-laundry-apps",
  storageBucket: "simple-laundry-apps.appspot.com",
  messagingSenderId: "1099340230688",
  appId: "1:1099340230688:web:c66a3a748b0b79b1b2cc45",
  measurementId: "G-QZLPCZY9B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth,db};
