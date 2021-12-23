import React, { useState, useEffect, createContext } from "react";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithEmailAndPassword } from "firebase/auth";
export const UserContext = createContext({ currentUser: null });

export default  ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  
  const signIn = async (email, password)=>{
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    });
  }
  


  const submit = async (email, password) => {
    console.log(email,password)
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
        
      });
  };

    const logOut = async ()=>{
      await signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <UserContext.Provider value={{submit,currentUser, logOut, signIn}}>
        {children}
    </UserContext.Provider>
  );
};