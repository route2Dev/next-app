// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcmt6yIZf-46V014jiAgZpAKwSdvG9jXA",
  authDomain: "my-next-app-1cdf9.firebaseapp.com",
  projectId: "my-next-app-1cdf9",
  storageBucket: "my-next-app-1cdf9.appspot.com",
  messagingSenderId: "501476596003",
  appId: "1:501476596003:web:ce3075539e4fc8af245496",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
