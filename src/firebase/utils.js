// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-FJg3sco_AAjbpeJzCvY6oDMhvS_eGq4",
  authDomain: "clone-eba56.firebaseapp.com",
  projectId: "clone-eba56",
  storageBucket: "clone-eba56.firebasestorage.app",
  messagingSenderId: "427529399286",
  appId: "1:427529399286:web:bebe8f774471157765b5d7",
  measurementId: "G-6V2JRC6Z0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

export { app, auth, analytics };
