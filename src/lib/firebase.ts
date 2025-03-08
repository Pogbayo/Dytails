import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: "AIzaSyDOqY5FGj4DjXYELyuHkKUtJhdQglx1G1w",
  authDomain: "elite-projections.firebaseapp.com",
  projectId: "elite-projections",
  storageBucket: "elite-projections.firebasestorage.app",
  messagingSenderId: "896073024958",
  appId: "1:896073024958:web:edc3df4d12b249f080a5ef",
  measurementId: "G-07BY1V0SZC"
});

export const auth = app.auth();
export default app;
