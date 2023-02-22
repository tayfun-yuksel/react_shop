import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn = () =>{
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
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