// src/contexts/UserContext.js
import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        setUserData(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};