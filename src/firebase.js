// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBg67SF8AVu0j2SXa6JmBKi5B6kf-a0u2o",
    authDomain: "linkedin-clone-861ab.firebaseapp.com",
    projectId: "linkedin-clone-861ab",
    storageBucket: "linkedin-clone-861ab.appspot.com",
    messagingSenderId: "328197573609",
    appId: "1:328197573609:web:e3b2fa6184c0da02561978"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp); // Pass the firebaseApp to getFirestore
  const auth = getAuth(firebaseApp); // Pass the firebaseApp to getAuth
  
  export { db, auth };
