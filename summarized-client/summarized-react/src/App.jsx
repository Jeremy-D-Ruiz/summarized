import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SummarizationApp from './componets/SummarizationApp';
import Nav from '../views/NavBar.jsx';
import AuthGoogle from './componets/AuthGoogle';
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth';
import AuthGoogleSignIn from './componets/AuthSignIn.jsx';
import AuthGoogleSignUp from './componets/AuthSignUp.jsx';

function App() {
    const firebaseConfig = {
      apiKey: "AIzaSyANq8MNKfiYDabb969KlVnPKDG3wtbuzIQ",
      authDomain: "summarized-a3ab8.firebaseapp.com",
      projectId: "summarized-a3ab8",
      storageBucket: "summarized-a3ab8.appspot.com",
      messagingSenderId: "711088498230",
      appId: "1:711088498230:web:06a06620a8979312825a97",
      measurementId: "G-QQSVPDB0WN"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase.auth(), (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
      <div className="App">
        <BrowserRouter>
          <Nav user={user} />
          <Routes>
            <Route path="/" element={<SummarizationApp />} />
            <Route path="/summarized" element={<SummarizationApp />} />
        <Route path="/auth-google-sign-in" element={<AuthGoogleSignIn auth={firebase.auth()} />} />
        <Route path="/auth-google-sign-up" element={<AuthGoogleSignUp auth={firebase.auth()} />} />


          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
