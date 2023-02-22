import { firebaseApp } from './firebase.config';

import { getAuth,
     signInWithPopup,
     signInWithRedirect, 
     GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, 
    doc, 
    getDoc,
    setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

firebaseApp();


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt});
        } catch (error) {
            console.log('error while creating user', error.message);
        }
    }
    return userDocRef;
};
