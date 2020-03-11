import React from 'react'
import styled from 'styled-components'
import CreateForm from './components/CreateForm/CreateForm'
import { ControlBar, ControlBarDisabled } from './components/ControlBar'
import {
  Visualisation,
  VisualisationDisabled,
} from './components/MembersVisualisation'

import useForm from '../../../hooks/useForm'
import { base } from '../../../base'

function MembersPage({
  members,
  setMembers,
  bands,
  setBands,
  getMembers,
  postMember,
  patchMember,
  deleteMember,
}) {
  const {
    formIsVisible,
    toggleForm,
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
  } = useForm()

  return (
    <Grid>
      {formIsVisible ? (
        <>
          <CreateForm
            members={members}
            setMembers={setMembers}
            postMember={postMember}
            newMembersInstruments={newMembersInstruments}
            addNewMembersInstrument={addNewMembersInstrument}
            removeNewMembersInstrument={removeNewMembersInstrument}
            resetNewMembersInstruments={resetNewMembersInstruments}
            bands={bands}
            setBands={setBands}
            toggleForm={toggleForm}
          />
          <VisualisationDisabled members={members} />
          <ControlBarDisabled toggleForm={toggleForm} />
        </>
      ) : (
        <>
          <Visualisation members={members} deleteMember={deleteMember} />
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
  justify-content: center;
  align-items: center;
`
