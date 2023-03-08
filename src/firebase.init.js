// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5F_W_mcr-Djj0EFphJWeNiJw5qCLBAB4",
  authDomain: "practice-care-services.firebaseapp.com",
  projectId: "practice-care-services",
  storageBucket: "practice-care-services.appspot.com",
  messagingSenderId: "585980773763",
  appId: "1:585980773763:web:ff5a8df343a43a6a0f62b6",
  measurementId: "G-RBV97P3TC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;