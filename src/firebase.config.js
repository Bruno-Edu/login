//Configuração de API retirada do projeto criado no site da Firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //Instanciando a biblioteca que vai fazer a autenticação
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyDjwQkAM0pW7XqKhNgDWWDqgGxDpV37Q",
  authDomain: "login-teste-44a56.firebaseapp.com",
  projectId: "login-teste-44a56",
  storageBucket: "login-teste-44a56.appspot.com",
  messagingSenderId: "444404051081",
  appId: "1:444404051081:web:c6f092c8434ba9ffa7ea58",
  measurementId: "G-N0RKM56REM"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const auth = getAuth(firebase)//

export {auth, firebase}