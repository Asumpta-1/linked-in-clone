import firebase from "firebase";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwlPit3KejkBMFbhUDbJ3vRCxK2dohfJU",
  authDomain: "linkedin-clone-6be30.firebaseapp.com",
  projectId: "linkedin-clone-6be30",
  storageBucket: "linkedin-clone-6be30.appspot.com",
  messagingSenderId: "159014026308",
  appId: "1:159014026308:web:bf5abc7eda9d77a9f3d011",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
