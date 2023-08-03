// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "DOMAIN ADDRESS",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING SENDER ID",
    appId: "APP ID"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp); // Pass the firebaseApp to getFirestore
  const auth = getAuth(firebaseApp); // Pass the firebaseApp to getAuth
  
  export { db, auth };
