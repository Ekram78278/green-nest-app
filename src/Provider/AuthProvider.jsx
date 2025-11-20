import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext()

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
         });
         return () => {
            unsubscribe();
         }
    }, [])


    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signInUser,
        logOut,
        signInWithGoogle,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;