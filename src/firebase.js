// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDuZEY7tGUrh2Y304P2L1EhO5x46jPA0A",
  authDomain: "clone-81693.firebaseapp.com",
  projectId: "clone-81693",
  storageBucket: "clone-81693.appspot.com",
  messagingSenderId: "660482480602",
  appId: "1:660482480602:web:75e86964d183954cd588e3",
  measurementId: "G-R8X97KBHNY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};