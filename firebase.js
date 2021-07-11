import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTNsuXU1CPpgzdbpWqpgEeyployQNDUlU",
  authDomain: "docs-clone-fdc80.firebaseapp.com",
  projectId: "docs-clone-fdc80",
  storageBucket: "docs-clone-fdc80.appspot.com",
  messagingSenderId: "244235647512",
  appId: "1:244235647512:web:3470c214937090fe4b216d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
