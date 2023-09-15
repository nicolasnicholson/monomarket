// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8pPHDj-0ol-nTYpfyVFQRHaqCFMsp25A",
  authDomain: "portsaid-1e0ba.firebaseapp.com",
  projectId: "portsaid-1e0ba",
  storageBucket: "portsaid-1e0ba.appspot.com",
  messagingSenderId: "311537366643",
  appId: "1:311537366643:web:375b9eebdb11a8a8bc5c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);