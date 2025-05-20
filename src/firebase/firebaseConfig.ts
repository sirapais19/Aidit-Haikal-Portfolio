// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5vy6xTMBe6HlFtxr1RYUvb6KPzX9lQR8",
  authDomain: "aiditportfolio.firebaseapp.com",
  projectId: "aiditportfolio",
  storageBucket: "aiditportfolio.appspot.com",
  messagingSenderId: "179488741121",
  appId: "1:179488741121:web:3a64dd1e2da36b600bad00"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services to use throughout your project
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
