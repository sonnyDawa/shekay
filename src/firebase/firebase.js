// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwtza08HFs8vN6CN8yocjWRKv7AGdspdE",
  authDomain: "shekay-a0ef0.firebaseapp.com",
  projectId: "shekay-a0ef0",
  storageBucket: "shekay-a0ef0.appspot.com",
  messagingSenderId: "128874702797",
  appId: "1:128874702797:web:b474feba96674b855b8684"
};



// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth(app)












/* C Program to find Sum of each row and column of a Matrix */


