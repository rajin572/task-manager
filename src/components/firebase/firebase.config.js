// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQuxQCJI9nVPJgHApBljcZwdjDPVOfpNk",
  authDomain: "task-manager-515bd.firebaseapp.com",
  projectId: "task-manager-515bd",
  storageBucket: "task-manager-515bd.appspot.com",
  messagingSenderId: "418020547239",
  appId: "1:418020547239:web:976c4a1903c25fe160d982"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;