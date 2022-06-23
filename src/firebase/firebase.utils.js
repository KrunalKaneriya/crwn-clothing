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

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName,email} = userAuth;
        const createdAt = new Date().toString();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(`Error creating new user ${error}`)
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;