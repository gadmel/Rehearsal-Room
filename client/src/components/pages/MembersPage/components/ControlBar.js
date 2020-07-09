import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ControlBar({ toggleForm }) {
  return (
    <Controls>
      <ControlOptionCreate onClick={toggleForm}>
        <FontAwesomeIcon icon="user-plus" />
      </ControlOptionCreate>
      <ControlOption to="/edit-member">
        <FontAwesomeIcon icon="user-edit" />
      </ControlOption>
    </Controls>
  )
}

export function ControlBarDisabled({ toggleForm }) {
  return (
    <ControlsDisabled>
      <ControlOptionCreate onClick={toggleForm}>
        <FontAwesomeIcon icon="user-plus" />
      </ControlOptionCreate>
      <ControlOption to="/edit-member">
        <FontAwesomeIcon icon="user-edit" />
      </ControlOption>
    </ControlsDisabled>
  )
}

const Controls = styled.section`
  grid-area: controls;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  max-width: 100%;
  position: relative;
  color: $color-white;
`
const ControlsDisabled = styled(Controls)`
  filter: brightness(50%);
  pointer-events: none;
`

const ControlOption = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
  font-size: 2.4rem;
  &.active {
    color: #8681b4;
  }
  &:hover {
    color: #8e8baa;
  }
`

const ControlOptionCreate = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
  font-size: 2.4rem;
  &.active {
    color: #8681b4;
  }
  &:hover {
    color: #8e8baa;
  }
`
