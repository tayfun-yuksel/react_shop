import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form.component/sign-up-form.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import './authentication.styles.scss';

const Authentication = () =>{
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}


export default Authentication;