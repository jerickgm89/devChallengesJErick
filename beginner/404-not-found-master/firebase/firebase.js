// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5VLEdg324kF1EMm5avjhAuf6WLiqFLQ",
  authDomain: "page-404-not-found-6b813.firebaseapp.com",
  projectId: "page-404-not-found-6b813",
  storageBucket: "page-404-not-found-6b813.appspot.com",
  messagingSenderId: "802494754411",
  appId: "1:802494754411:web:55f341995eb9730b920b2e",
  measurementId: "G-RENN095FWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);