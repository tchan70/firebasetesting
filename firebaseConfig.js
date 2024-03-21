import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9LUZbonbRa7wvIELZSr9TiewcPJn9wDg",
  authDomain: "bugslayersfirebasetesting.firebaseapp.com",
  projectId: "bugslayersfirebasetesting",
  storageBucket: "bugslayersfirebasetesting.appspot.com",
  messagingSenderId: "210323831613",
  appId: "1:210323831613:web:e0835484e431f16cf0a354",
  measurementId: "G-3GZMZ2YKEZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);