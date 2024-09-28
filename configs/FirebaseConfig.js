// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbWfHvA7irr_X0iuBQfhN4IXKL34K-on4",
  authDomain: "travel-planner-a2e94.firebaseapp.com",
  projectId: "travel-planner-a2e94",
  storageBucket: "travel-planner-a2e94.appspot.com",
  messagingSenderId: "1018248674537",
  appId: "1:1018248674537:web:80a5a9675ed9bfed124478",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
