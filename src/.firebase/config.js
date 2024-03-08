import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU15o2lb0ADJM12z7XpiVxfbj8iw9bGDE",
  authDomain: "ilytat-e8802.firebaseapp.com",
  projectId: "ilytat-e8802",
  storageBucket: "ilytat-e8802.appspot.com",
  messagingSenderId: "413925743631",
  appId: "1:413925743631:web:6c751f4b60af59f18c977a",
  measurementId: "G-BWNQPD4ESM",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics();


export { db, analytics };