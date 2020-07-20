import React, { useState, createContext, useEffect } from 'react'
import { fbAuth } from '../base'

function useAuth() {
   const AuthContext = createContext()

   function signIn(email, password) {
      fbAuth
         .signInWithEmailAndPassword(email, password)
         .catch(error => console.error(error))
         .then(console.log('success'))
         .then(console.info(fbAuth))
         .then(console.info(fbAuth.currentUser))
   }

   function AuthProvider({ children }) {
      const [currentUser, setCurrentUser] = useState(null)

      useEffect(() => {
         fbAuth.onAuthStateChanged(setCurrentUser)
      }, [])

      return (
         <AuthContext.Provider value={{ currentUser }}>
            {children}
         </AuthContext.Provider>
      )
   }
   return {
      AuthProvider,
      signIn,
   }
}
export default useAuth
