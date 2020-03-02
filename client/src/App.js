import React, { useState } from 'react'
import { MembersVisualisation as MembersPage } from './components/pages/MembersPage'
import styled from 'styled-components'

function App() {
  const [members, setMembers] = useState([
    {
      id: '001',
      name: 'Viktor Miller',
      band: 'Viktor Miller',
      instruments: ['vocals', 'guitar'],
      roles: ['musician'],
      roomAsignment: 'RehearsalRoom_1',
    },
    {
      id: '002',
      name: 'Alexey Tietz',
      band: 'XYNior',
      instruments: ['vocals', 'guitar'],
      roles: ['administrator', 'musician'],
      roomAsignment: 'RehearsalRoom_1',
    },
  ])

  return (
    <Grid>
      <Header>Rehearsal Room</Header>
      <MembersPage members={members} />
    </Grid>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  grid-template-rows: 120px auto 15%;
  grid-template-areas: 'header' 'stage' 'footer';
  height: 100vh;
  margin: 0;
  width: 100vw;
`
const Header = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: center;
  margin: 0;
`
