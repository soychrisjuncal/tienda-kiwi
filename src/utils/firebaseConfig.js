// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5G-yZIDvDmyjf-4T918yH58wQe266q9g",
  authDomain: "tienda-kiwi.firebaseapp.com",
  projectId: "tienda-kiwi",
  storageBucket: "tienda-kiwi.appspot.com",
  messagingSenderId: "844217526983",
  appId: "1:844217526983:web:9e1079bac919a3dec6ace2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
