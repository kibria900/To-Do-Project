// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALQds78osf7edEE6s7Z52Wedi0HzYSZbw",
  authDomain: "to-do-d038e.firebaseapp.com",
  projectId: "to-do-d038e",
  storageBucket: "to-do-d038e.firebasestorage.app",
  messagingSenderId: "612063535795",
  appId: "1:612063535795:web:a7f8637474556a224086c6",
  measurementId: "G-4JBCP6Z1BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig