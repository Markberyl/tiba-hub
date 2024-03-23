import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAbRG_N0aadaJYGZaMON1S78Kgdp9JjUBk",
  authDomain: "get-tiba.firebaseapp.com",
  projectId: "get-tiba",
  storageBucket: "get-tiba.appspot.com",
  messagingSenderId: "353396895321",
  appId: "1:353396895321:web:c6a5daa7b166c9aef5cb48",
  measurementId: "G-SGWKY5PE8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
