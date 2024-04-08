import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7Ej5WGo9UxXVDn5dloKFYGdEymdi-JSk",
  authDomain: "tiba-hub.firebaseapp.com",
  projectId: "tiba-hub",
  storageBucket: "tiba-hub.appspot.com",
  messagingSenderId: "718834088368",
  appId: "1:718834088368:web:142a37dc21c5286b7bbe75",
  measurementId: "G-6SCDWRZKB1"
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
