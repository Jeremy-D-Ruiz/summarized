import React, { useEffect } from "react";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const AuthGoogleSignIn = ({ auth }) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('.firebase-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
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

export default AuthGoogleSignIn;