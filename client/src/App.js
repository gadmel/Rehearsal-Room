import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MembersVisualisation as MembersPage } from './components/pages/MembersPage'
import Header from './components/Header'
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
    {
      id: '003',
      name: 'Viktor Miller',
      avatar: './viktor_miller.jpg',
      band: '',
      instruments: ['vocals', 'guitar'],
      roles: ['musician'],
      roomAsignment: 'RehearsalRoom_1',
      repetitionDayTime: ['Wendsday, 18:00 - 24:00'],
    },
  ])

  return (
    <Router>
      <Grid>
        <Header />
        <MembersPage members={members} />
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
