import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import useMembers from './hooks/useMembers'
import Calendar from 'react-calendar'
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
        <Switch>
          <Route path="/">
            <CalendarContainer>
              <CalendarStyled locale="en" showDoubleView={true} />
            </CalendarContainer>
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
        <Footer>
          <NavItem to="/calendar">
            <i
              className="far fa-calendar-alt"
              style={{ background: 'transparent' }}
            ></i>
          </NavItem>
          <NavItem to="/members">
            <i
              className="fas fa-users"
              style={{ background: 'transparent' }}
            ></i>
          </NavItem>
          <NavItem to="/edit-member">
            <i
              className="fas fa-sign-out-alt"
              style={{ background: 'transparent' }}
            ></i>
          </NavItem>
        </Footer>
      </Grid>
    </Router>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  grid-template-rows: 68px auto 78px;
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
  background: #1e3145;
`
const NavItem = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  text-decoration: none;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  color: white;
  font-size: 3.4rem;
  background-color: #1e3145;
  margin: 0;
  padding: 0;
  &.active {
    color: #a0bcd9;
  }
  &:hover {
    color: #a0bcd9;
    background: #1e3145;
  }
`

const CalendarContainer = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const CalendarStyled = styled(Calendar)`
  font-size: 2em;
  display: block;
`
