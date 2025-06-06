// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGrXE9vSfEZQCTU0JUF53Ru7pVBMgL6AI",
  authDomain: "loginfirebase-90297.firebaseapp.com",
  projectId: "loginfirebase-90297",
  storageBucket: "loginfirebase-90297.firebasestorage.app",
  messagingSenderId: "872460555466",
  appId: "1:872460555466:web:c996888439e78f05bbd033",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

//SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
//657656599605-r2l3lpf153rv469fftb00u6hrf5vljtq.apps.googleusercontent.com