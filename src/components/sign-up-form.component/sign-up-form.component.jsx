import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () =>{
    const [formValues, setFormValues] = useState(defaultFormValues);

    const resetFormValues = () =>{
        setFormValues(defaultFormValues);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        //get email pass confirm pass
        //match pass and confirm-pass
        //check db if user exists already
        //if not save user
        
        if(formValues.password != formValues.confirmPassword){
            alert("passwords dont match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(formValues.email, formValues.password);
            await createUserDocumentFromAuth(user, {displayName: formValues.displayName});
            resetFormValues();

        } catch (error) {
            console.log("could not create user error: ", error);
        }

    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>Sign up with email and password</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label='DisplayName'
                required
                type='text' 
                name="displayName"
                value={formValues.displayName}
                onChange={handleChange}/>
                
                <FormInput label='Email'
                required
                type='email' 
                name="email"
                value={formValues.email}
                onChange={handleChange}/>
                
                <FormInput label='Password'
                required
                type='password' 
                name="password"
                value={formValues.password}
                onChange={handleChange}/>

                <FormInput label='Confirm Password'
                required
                type='password' 
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}/>

                <Button type="submit">SignUp</Button>
            </form>
        </div>
    );
}

export default SignUpForm;