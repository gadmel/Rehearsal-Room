import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function ControlBar({ toggleForm }) {
  return (
    <Controls>
      <ControlOptionCreate onClick={toggleForm}>
        <i className="fas fa-user-plus"></i>
      </ControlOptionCreate>
      <ControlOption to="/edit-member">
        <i className="fas fa-user-edit"></i>
      </ControlOption>
    </Controls>
  )
}

export function ControlBarDisabled({ toggleForm }) {
  return (
    <ControlsDisabled>
      <ControlOptionCreate onClick={toggleForm}>
        <i className="fas fa-user-plus"></i>
      </ControlOptionCreate>
      <ControlOption to="/edit-member">
        <i className="fas fa-user-edit"></i>
      </ControlOption>
    </ControlsDisabled>
  )
}

const Controls = styled.section`
  grid-area: controls;
  display: flex;
  flex-grow: 1;
  color: $color-white;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  max-width: 100%;
  position: relative;
`
const ControlsDisabled = styled(Controls)`
  filter: brightness(50%);
  pointer-events: none;
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

const ControlOptionCreate = styled.div`
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
