import React, { useState } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import useMembers from './hooks/useMembers'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginPage from './components/pages/LoginPage'
import MembersPage from './components/pages/MembersPage/MembersPage'
import useAuth from './hooks/useAuth'

function App() {
   const { AuthProvider, signIn, currentUser, setCurrentUser } = useAuth()

   const [bands, setBands] = useState([
      { value: null },
      { value: 'Nerull', name: 'Nerull' },
      { value: 'ToNe Dayzy', name: 'ToNe Dayzy' },
      { value: 'Lola', name: 'Lola' },
      { value: 'MUZOR', name: 'MUZOR' },
      { value: 'Inoplanepunks', name: 'Inoplanepunks' },
      { value: 'XYNior', name: 'XYNior' },
      { value: 'Frozen Waterfall', name: 'Frozen Waterfall' },
   ])

   const {
      members,
      setMembers,
      getMembers,
      postMember,
      patchMember,
      deleteMember,
   } = useMembers()

   return (
      <AuthProvider>
         <Router>
            <Grid>
               <Header />
               <Switch>
                  <Route path="/">
                     {currentUser ? (
                        <Redirect to={'/members'} />
                     ) : (
                        <LoginPage signIn={signIn} />
                     )}
                  </Route>
                  <Route path="/members">
                     <MembersPage
                        members={members}
                        setMembers={setMembers}
                        bands={bands}
                        setBands={setBands}
                        getMembers={getMembers}
                        postMember={postMember}
                        patchMember={patchMember}
                        deleteMember={deleteMember}
                     />
                  </Route>
               </Switch>
               <Footer />
            </Grid>
         </Router>
      </AuthProvider>
   )
}

export default App

const Grid = styled.div`
   display: grid;
   grid-template-rows: 68px auto 68px;
   grid-template-areas: 'header' 'stage' 'footer';
   height: 100%;
   margin: 0;
   width: 100%;
`
