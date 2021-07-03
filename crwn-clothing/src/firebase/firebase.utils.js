import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBazjLGMUVcFpMKRg6wMFXTtI4e2pZJok4",
    authDomain: "crwndb-8f8cd.firebaseapp.com",
    projectId: "crwndb-8f8cd",
    storageBucket: "crwndb-8f8cd.appspot.com",
    messagingSenderId: "975861692563",
    appId: "1:975861692563:web:12d76137990396fb63b566",
    measurementId: "G-DH4JZV7LF2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(e){
            console.log('error creating user', e.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;