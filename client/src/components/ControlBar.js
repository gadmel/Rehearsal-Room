import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Controls() {
  return (
    <ControlBar>
      <ControlOption exact to="/create-member">
        <i className="fas fa-user-plus"></i>
      </ControlOption>
      <ControlOption to="/edit-member">
        <i className="fas fa-user-edit"></i>
      </ControlOption>
    </ControlBar>
  )
}
export default Controls

const ControlBar = styled.section`
  grid-area: controls;
  display: flex;
  flex-grow: 1;
  color: $color-white;
  justify-content: center;
  align-items: center;
  margin: 0;
  max-width: 100%;
  position: relative;
`

const ControlOption = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  text-decoration: none;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  color: white;
  font-size: 2.4rem;
  background-color: transparent;
  margin: 0;
  padding: 0;
  &.active {
    color: #8681b4;
  }
  &:hover {
    color: #8e8baa;
    background: #135285;
  }
`
