// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP.apiKey,
  authDomain: process.env.REACT_APP.authDomain,
  projectId: process.env.REACT_APP.projectId,
  storageBucket: process.env.REACT_APP.storageBucket,
  messagingSenderId: process.env.REACT_APP.messagingSenderId,
  appId: process.env.REACT_APP.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;