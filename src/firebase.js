import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxGE0wT14v-Kcm-Co6VSzYaIyIC13ZQhU",
  authDomain: "messenger-clone-20d62.firebaseapp.com",
  databaseURL: "https://messenger-clone-20d62.firebaseio.com",
  projectId: "messenger-clone-20d62",
  storageBucket: "messenger-clone-20d62.appspot.com",
  messagingSenderId: "251399312501",
  appId: "1:251399312501:web:813733a6e42b9238d4d43c",
  measurementId: "G-GGQF09FL20",
});

const db = firebaseApp.firestore();

export default db;
