import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyCRQ5g1sg42aXW_aC8DH5er9Yh4zQ9Ibrc",
    authDomain: "crwn-db-8750e.firebaseapp.com",
    projectId: "crwn-db-8750e",
    storageBucket: "crwn-db-8750e.appspot.com",
    messagingSenderId: "67023989358",
    appId: "1:67023989358:web:8b8e42ac4663b66f01d47f"
};  
firebase.initializeApp(config);

export const auth = firebase.auth(firebase);
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;