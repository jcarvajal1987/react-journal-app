import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvVZPqC2mLogz7YWTNb2ZWSEw4StdtFjU",
    authDomain: "react-app-journal-7ddf7.firebaseapp.com",
    projectId: "react-app-journal-7ddf7",
    storageBucket: "react-app-journal-7ddf7.appspot.com",
    messagingSenderId: "651991573957",
    appId: "1:651991573957:web:42a23e6e418a56406e17ac"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

