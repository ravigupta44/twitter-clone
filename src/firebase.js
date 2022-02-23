import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaahZGEYpUXPH-Sq2BXAZhhcrHJ5GsKzI",
  authDomain: "twitter-clone-d0e96.firebaseapp.com",
  projectId: "twitter-clone-d0e96",
  storageBucket: "twitter-clone-d0e96.appspot.com",
  messagingSenderId: "799393832342",
  appId: "1:799393832342:web:0774e7ca6d6ae6876691b7",
  measurementId: "G-8WX13LTYTD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;