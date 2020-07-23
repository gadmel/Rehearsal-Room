import React, { useState, createContext, useEffect } from 'react'
import { fbAuth } from '../base'

function useAuth() {
   const AuthContext = createContext()
   const [currentUser, setCurrentUser] = useState(null)

   function signIn(email, password) {
      fbAuth
         .signInWithEmailAndPassword(email, password)
         .then(responce => setCurrentUser(responce.user))
         .catch(error => console.error(error))
         .then(console.log('success'))
   }

   function AuthProvider({ children }) {
      useEffect(() => {
         fbAuth.onAuthStateChanged(data =>
            console.log(
               {
                  providerData: data && data.providerData,
                  fb_user_id: data && data.uid,
               },
               setCurrentUser(data),
               console.info('user is:' + { currentUser })
            )
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
export default useAuth
