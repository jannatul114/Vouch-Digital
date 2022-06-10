// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSYLAkM1q5WlBxUSyUPqBqhBgE3omAjTE",
    authDomain: "vouch-digital.firebaseapp.com",
    projectId: "vouch-digital",
    storageBucket: "vouch-digital.appspot.com",
    messagingSenderId: "1065874259014",
    appId: "1:1065874259014:web:1edcaf57f04d2c02641e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;