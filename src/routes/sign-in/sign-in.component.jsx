import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const SignIn = () =>{
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <>
            <div>Sign-in</div>
            <button onClick={logGoogleUser}>
                Sign in With Google Popup
            </button>
        </>
    );
}


export default SignIn;