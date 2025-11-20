import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, { createContext, useState } from 'react';

import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext()



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;