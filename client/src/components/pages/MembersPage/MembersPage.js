import React from 'react'
import styled from 'styled-components'
import CreateForm from './components/CreateForm'
import { ControlBar, ControlBarDisabled } from './components/ControlBar'
import {
  Visualisation,
  VisualisationDisabled,
} from './components/MembersVisualisation'

import useForm from '../../../hooks/useForm'
import { base } from '../../../base'

function MembersPage({ members, setMembers, bands, setBands }) {
  const { formIsVisible, toggleForm } = useForm()

  return (
    <Grid>
      {console.info('database: ' + base)}
      {formIsVisible ? (
        <>
          <CreateForm
            members={members}
            setMembers={setMembers}
            bands={bands}
            setBands={setBands}
            toggleForm={toggleForm}
          />
          <VisualisationDisabled members={members} />
          <ControlBarDisabled toggleForm={toggleForm} />
        </>
      ) : (
        <>
          <Visualisation members={members} />
          <ControlBar toggleForm={toggleForm} />
        </>
      )}
    </Grid>
  )
}

export default MembersPage

const Grid = styled.main`
  grid-area: stage;
  display: grid;
  grid-template-rows: auto 130px;
  grid-template-areas: 'visualisation' 'controls';
  margin: 0;
  width: 100%;
`
