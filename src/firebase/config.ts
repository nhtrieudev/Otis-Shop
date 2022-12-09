import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCy5x127l1bIHFws0GHsVjjeZ7SgThQWxM",
  authDomain: "otis-web-1.firebaseapp.com",
  projectId: "otis-web-1",
  storageBucket: "otis-web-1.appspot.com",
  messagingSenderId: "1099055774486",
  appId: "1:1099055774486:web:5e54d34b216c0b9bf8ee37",
  measurementId: "G-FSLER9Q47G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
