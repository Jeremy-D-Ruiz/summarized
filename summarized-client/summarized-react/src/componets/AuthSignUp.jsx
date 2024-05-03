// AuthGoogleSignUp.jsx
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
            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    if (authResult.additionalUserInfo.isNewUser) {
                        // New user, continue with sign-up
                        return true;
                    } else {
                        // Existing user signed in, show alert and redirect to home page
                        auth.signOut()
                        .then(() => {
                            alert('You are already a user. Please Sign In Instead');
                            window.location.href = '/summarized';
                        })
                        .catch(error => {
                            console.error('Error signing out:', error);
                        });
                        return false; 
                    }
                }
            },
            signInOptions: [
                {   
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    
                }
            ],
            signInSuccessUrl: '/summarized'
        });
       

    }, [auth]);

    return (
        <div className='firebase-auth-container'></div>
    );
}

export default AuthGoogleSignUp;
