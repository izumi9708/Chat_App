import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIV-gFbo33cU3GRq-mCiZTmG3D-XYe3m0",
  authDomain: "communication-73bfa.firebaseapp.com",
  projectId: "communication-73bfa",
  storageBucket: "communication-73bfa.appspot.com",
  messagingSenderId: "575290160237",
  appId: "1:575290160237:web:ce14778dadbe987594fb64"
});

const db = firebase.firestore();
const auth = firebase.auth();




export { db , auth };