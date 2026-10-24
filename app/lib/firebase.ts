
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIhdoBgV86jg0SzewdjK9zlgSYGeys9JA",
  authDomain: "dils-website.firebaseapp.com",
  projectId: "dils-website",
  storageBucket: "dils-website.firebasestorage.app",
  messagingSenderId: "833048470935",
  appId: "1:833048470935:web:e1b546cd9cf808c73f10d2",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;