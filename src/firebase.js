import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDccQU44t8Q1TQRhFguOWNphwFHXWXX_x4",
  authDomain: "slack-clone-challenge-39d61.firebaseapp.com",
  projectId: "slack-clone-challenge-39d61",
  storageBucket: "slack-clone-challenge-39d61.appspot.com",
  messagingSenderId: "630929567358",
  appId: "1:630929567358:web:d72e5572775d4fb23b722f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
