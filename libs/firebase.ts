import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDOvDkSajkNEQqsO5OCGKLEaW5GCKdUmM",
  authDomain: "sneakers-store-54b57.firebaseapp.com",
  projectId: "sneakers-store-54b57",
  storageBucket: "sneakers-store-54b57.appspot.com",
  messagingSenderId: "439602899762",
  appId: "1:439602899762:web:5509d4ea76ebab8126c52b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
