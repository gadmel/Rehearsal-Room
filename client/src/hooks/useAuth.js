import React, { useState, createContext, useEffect } from 'react'
import { fbAuth } from '../base'

export default function useAuth() {
   const AuthContext = createContext()
   const [currentUser, setCurrentUser] = useState(null)

   function signIn(email, password) {
      fbAuth
         .signInWithEmailAndPassword(email, password)
         .then(
            responce => (
               setCurrentUser(responce.user.providerData[0]),
               console.log('signed in as ' + responce.user.providerData[0].uid)
            )
         )
         .catch(error => console.error(error))
         .then(console.log('success'))
   }

   function AuthProvider({ children }) {
      useEffect(data => {
         fbAuth.onAuthStateChanged(
            () => console.log('Auth state has changed to ' + data),
            console.error('user is')
         )
      }, [])

      return (
         <AuthContext.Provider value={currentUser}>
            {(currentUser, children)}
         </AuthContext.Provider>
      )
   }

   return {
      AuthProvider,
      signIn,
   }
}
