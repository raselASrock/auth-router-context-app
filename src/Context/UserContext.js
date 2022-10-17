import React, { createContext } from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName:'Akash'});

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
}

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("Auth State changed:", currentUser);
        })
    return () =>{
         unsubscribe();
}

    }, [])

    const authInfo = {user, createUser, signIn, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;