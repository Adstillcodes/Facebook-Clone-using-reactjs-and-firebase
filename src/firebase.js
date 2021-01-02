import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9mfInOHs9BysQ85pRbV3MYipwiu3jhzs",
    authDomain: "facebook-clone-e8c7b.firebaseapp.com",
    databaseURL: "https://facebook-clone-e8c7b-default-rtdb.firebaseio.com",
    projectId: "facebook-clone-e8c7b",
    storageBucket: "facebook-clone-e8c7b.appspot.com",
    messagingSenderId: "467956845858",
    appId: "1:467956845858:web:ff91bf07b91a194884297b"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
