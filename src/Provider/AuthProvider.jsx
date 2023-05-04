import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logInWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;