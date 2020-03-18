import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useMembers from './hooks/useMembers'
import MembersPage from './components/pages/MembersPage/MembersPage'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
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
    <Router>
      <Grid>
        <Header />
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
        <Footer>Navigation Elements</Footer>
      </Grid>
    </Router>
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
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: footer;
  background: #0a2a45;
`
