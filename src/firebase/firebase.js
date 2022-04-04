// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-yPRvkRnMQKuIv29IvHbQO-yzfj1EbKI",
  authDomain: "giffi-28a12.firebaseapp.com",
  projectId: "giffi-28a12",
  storageBucket: "giffi-28a12.appspot.com",
  messagingSenderId: "973601754104",
  appId: "1:973601754104:web:f80f2dce6ec71a4adca40d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
