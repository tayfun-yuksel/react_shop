import { initializeApp } from "firebase/app";
import { getAuth,
     signInWithPopup,
     signInWithRedirect, 
     GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4CKr6Z3kgKXXyg5czF1FWnRRkfPNjQE8",
  authDomain: "react-shopping-db-ba407.firebaseapp.com",
  projectId: "react-shopping-db-ba407",
  storageBucket: "react-shopping-db-ba407.appspot.com",
  messagingSenderId: "197740671308",
  appId: "1:197740671308:web:c3fbbe7de54a4b2c321fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithRedirect = () => signInWithRedirect(auth, provider);
