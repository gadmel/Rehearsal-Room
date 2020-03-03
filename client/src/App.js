import React, { useState } from 'react'
import { MembersVisualisation as MembersPage } from './components/pages/MembersPage'
import styled from 'styled-components'

function App() {
  const [members, setMembers] = useState([
    {
      id: '001',
      name: 'Viktor Miller',
      avatar: './viktor_miller.jpg',
      band: '',
      instruments: ['vocals', 'guitar'],
      roles: ['musician'],
      roomAsignment: 'RehearsalRoom_1',
      repetitionDayTime: ['Wendsday, 18:00 - 24:00'],
    },
    {
      id: '002',
      name: 'Alexey Tietz',
      avatar: './aleksey_tietz.jpeg',
      band: 'XYNior',
      instruments: ['vocals', 'guitar'],
      roles: ['administrator', 'musician'],
      roomAsignment: 'RehearsalRoom_1',
      repetitionDayTime: ['Friday, 16:00 - 19:00', 'Sunday, 14:00 - 22:00'],
    },
  ])

  return (
    <Grid>
      <Header>
        <LogoText>Rehearsal Room</LogoText>
      </Header>
      <MembersPage members={members} />
    </Grid>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 15%;
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
  background: #0a2a45;
  margin: 0;
`
const LogoText = styled.h1`
  background: transparent;
`
