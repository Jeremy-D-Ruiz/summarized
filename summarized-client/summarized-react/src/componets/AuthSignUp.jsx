// AuthGoogleSignUp.jsx
import React, { useEffect } from "react";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const AuthGoogleSignUp = ({ auth }) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('.firebase-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                }
            ],
            signInSuccessUrl: '/summarized'
        });
    }, [auth]);

    return (
        <>
            <div className='firebase-auth-container'></div>
        </>
    );
}

export default AuthGoogleSignUp;
