import React, { useState, createContext, useContext, useEffect } from 'react'
import { fbAuth } from '../base'

const AuthContext = createContext()

function useAuth() {
   function signIn(email, password) {
      fbAuth
         .signInWithEmailAndPassword(email, password)
         .catch(error => console.error(error))
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
