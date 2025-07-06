// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZfqeiadwLeKHLvxkKg8Bs5TasWv_dyyo',
  authDomain: 'emubench-459802.firebaseapp.com',
  projectId: 'emubench-459802',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
