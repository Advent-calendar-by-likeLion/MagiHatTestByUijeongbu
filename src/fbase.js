import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyClYkVymxbuqfzF8QC9Xn8bzQd3lCo3tCA",
  authDomain: "uijeongbu.firebaseapp.com",
  projectId: "uijeongbu",
  storageBucket: "uijeongbu.appspot.com",
  messagingSenderId: "343214386674",
  appId: "1:343214386674:web:88b32613147c1eba764f6b",
  measurementId: "G-459309FVHJ"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();