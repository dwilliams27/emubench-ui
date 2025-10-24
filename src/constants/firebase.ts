// firebase-config.js
import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZfqeiadwLeKHLvxkKg8Bs5TasWv_dyyo",
  authDomain: "emubench-459802.firebaseapp.com",
  projectId: "emubench-459802",
  storageBucket: "emubench-459802.firebasestorage.app",
  messagingSenderId: "695331866583",
  appId: "1:695331866583:web:c4056b4a56d841db022d92",
  measurementId: "G-4NV624PBV1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);
