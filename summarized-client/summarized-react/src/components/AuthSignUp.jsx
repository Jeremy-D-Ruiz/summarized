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
                        const { displayName, uid } = authResult.user; 
                        callAdd(displayName, uid); 
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
            ] ,
            signInSuccessUrl: '/summarized'
        });
       
    }, [auth]);


    function callAdd(displayName, uid) {
        const userData = {
            id: uid,
            displayName: displayName
        };
    
        fetch('http://localhost:8080/new-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                // User data added successfully
                console.log('User added successfully');
            } else {
                // Handle error from API call
                throw new Error('Failed to add user on the server');
            }
        })
        .catch(error => {
            console.error('Error adding user:', error);
        });
    }
    

    return (
        <div className='firebase-auth-container'></div>
    );
}

export default AuthGoogleSignUp;