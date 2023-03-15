import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBihEFJx95bgZNG1P4a8qizqdnO0PPLyYM",
  authDomain: "todolist-41010.firebaseapp.com",
  projectId: "todolist-41010",
  storageBucket: "todolist-41010.appspot.com",
  messagingSenderId: "804105891221",
  appId: "1:804105891221:web:f96109cc2311eec9f65a9c",
  measurementId: "G-JFEVHD3VYH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
