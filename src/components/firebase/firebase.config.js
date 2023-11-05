// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOGPzTzpDaz-JYEGNpLEoR1EgN81ixBQg",
  authDomain: "job-hustle.firebaseapp.com",
  projectId: "job-hustle",
  storageBucket: "job-hustle.appspot.com",
  messagingSenderId: "544365893088",
  appId: "1:544365893088:web:86b1a20b279b115b858785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;