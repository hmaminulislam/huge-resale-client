import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  //create user with email & password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update user profile
  const updateUser = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };
  //login user with email & password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  //logOut 
  const logOut = () => {
    return signOut(auth)
  }
  //observer on the Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
        unsubscribe()
    }
  }, []);
  const userInfo = {
    createUser,
    updateUser,
    userLogin,
    user,
    signInGoogle,
    logOut
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;