import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCGgGthvwRdMJ8e9Ugx_Fwoj9LjpRhiz4g",
  authDomain: "contact-game-7e850.firebaseapp.com",
  projectId: "contact-game-7e850",
  storageBucket: "contact-game-7e850.firebasestorage.app",
  messagingSenderId: "143062958990",
  appId: "1:143062958990:web:34b5420cd91bdfc357dadf",
  measurementId: "G-7GJXF56Y1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };