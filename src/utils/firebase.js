// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzJ6FL0UsGSkxK8imB-5jMPfketEdtp5k",
  authDomain: "netflixgpt-8325c.firebaseapp.com",
  projectId: "netflixgpt-8325c",
  storageBucket: "netflixgpt-8325c.appspot.com",
  messagingSenderId: "508847890284",
  appId: "1:508847890284:web:ddf1f8cf06234c6bc99d49",
  measurementId: "G-N1QWK8S5N1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();