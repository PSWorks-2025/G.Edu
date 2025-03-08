import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAuM6gtV60gRN1dd1vlXKd20SmO0vqbH6U",
  authDomain: "g-edu-4c960.firebaseapp.com",
  projectId: "g-edu-4c960",
  storageBucket: "g-edu-4c960.firebasestorage.app",
  messagingSenderId: "571083430328",
  appId: "1:571083430328:web:c61d14df336fda6d1d974d",
  measurementId: "G-Q6CL8JK6J9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const str = getStorage(app);
