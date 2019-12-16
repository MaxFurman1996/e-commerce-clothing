import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDnT-hlXKvqO0YEJUstFuk0_PsjvoiRiPU",
    authDomain: "e-commerce-clothing-33373.firebaseapp.com",
    databaseURL: "https://e-commerce-clothing-33373.firebaseio.com",
    projectId: "e-commerce-clothing-33373",
    storageBucket: "e-commerce-clothing-33373.appspot.com",
    messagingSenderId: "408350196520",
    appId: "1:408350196520:web:dd64c941b43c5bb86b461d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;