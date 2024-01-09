// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjrnRHaJXYm9VtY4SuWMcsBQa30-lHdec",
  authDomain: "realtor-clone-c50b9.firebaseapp.com",
  projectId: "realtor-clone-c50b9",
  storageBucket: "realtor-clone-c50b9.appspot.com",
  messagingSenderId: "499188742264",
  appId: "1:499188742264:web:367532d11791eebaba158d"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()