import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "answerai-fe26a.firebaseapp.com",
  projectId: "answerai-fe26a",
  storageBucket: "answerai-fe26a.appspot.com",
  messagingSenderId: "959880959832",
  appId: "1:959880959832:web:3de01f7a0260a0564f372d"
};

const app = initializeApp(firebaseConfig);
