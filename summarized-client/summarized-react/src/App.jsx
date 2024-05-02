import React, { useEffect, useState } from 'react';
import SummarizationApp from './componets/SummarizationApp';
import { initializeApp } from "firebase/app";
import AuthGoogle from './componets/AuthGoogle';
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authenticated from './componets/views/Authenticated';

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

  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth(), (user) => {
      if(user){
        setUser({email: user.email , uid:user.id});
      }else{
        setUser({});
      }
    });

    // No need for an unsubscribe function in this case

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user && (
            <Route path="/authenticated" element={<Authenticated user={user} />} />
          )}
        </Routes>
        <AuthGoogle auth={firebase.auth()} />
      </BrowserRouter>
      <div>
        <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
        
      </div>
      <SummarizationApp />
    </div>
  );
}

export default App;
