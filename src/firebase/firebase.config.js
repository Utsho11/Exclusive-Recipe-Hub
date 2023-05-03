// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzX8dYbJ4XqknmaG5sxAaStKxZoLwTc8s",
  authDomain: "exclusive-recipe-hub-client.firebaseapp.com",
  projectId: "exclusive-recipe-hub-client",
  storageBucket: "exclusive-recipe-hub-client.appspot.com",
  messagingSenderId: "94024638536",
  appId: "1:94024638536:web:0fb3597542f6d8b2cfb87d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;