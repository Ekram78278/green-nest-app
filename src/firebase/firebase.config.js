// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqI8Mu2tehyTz_HrHHJxE1LvJ0mXFuKHw",
  authDomain: "green-nest-app-23f1e.firebaseapp.com",
  projectId: "green-nest-app-23f1e",
  storageBucket: "green-nest-app-23f1e.firebasestorage.app",
  messagingSenderId: "656356495954",
  appId: "1:656356495954:web:6139244a1fb989d97e858b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);