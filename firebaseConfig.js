// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXoy2hEb_maSSdFZfzBsu-HxwMecf9vbw",
  authDomain: "workflow-apk.firebaseapp.com",
  projectId: "workflow-apk",
  storageBucket: "workflow-apk.firebasestorage.app",
  messagingSenderId: "637175775346",
  appId: "1:637175775346:web:3852adcb6be6c6d1d002eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
