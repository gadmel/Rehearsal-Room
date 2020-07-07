import React, { useState } from 'react'
import styled from 'styled-components'
import CreateForm from './components/CreateForm/CreateForm'
import { ControlBar, ControlBarDisabled } from './components/ControlBar'
import {
  Visualisation,
  VisualisationDisabled,
} from './components/MembersVisualisation'

import useForm from '../../../hooks/useForm'

function MembersPage({
  members,
  setMembers,
  bands,
  setBands,
  getMembers,
  getMemberById,
  postMember,
  patchMember,
  deleteMember,
}) {
  const {
    formIsVisible,
    toggleForm,
    fillFormWithData,
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
    stateOfAMemberToEdit,
    setStateOfAMemberToEdit,
  } = useForm()

  const [chooseMemberToEdit, setChooseMemberToEdit] = useState(false)

  function toggleChooseMemberMode() {
    setChooseMemberToEdit(!chooseMemberToEdit)
  }

  function selectMemberToEdit(Member) {
    console.log(Member)
    setStateOfAMemberToEdit(Member)
    fillFormWithData(Member)
    toggleChooseMemberMode()
    toggleForm()
  }

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
          <ControlBarDisabled
            toggleForm={toggleForm}
            chooseMemberToEdit={chooseMemberToEdit}
            toggleChooseMemberMode={toggleChooseMemberMode}
          />
        </>
      ) : (
        <>
          <Visualisation
            members={members}
            deleteMember={deleteMember}
            chooseMemberToEdit={chooseMemberToEdit}
            selectMemberToEdit={selectMemberToEdit}
          />
          <ControlBar
            toggleForm={toggleForm}
            chooseMemberToEdit={chooseMemberToEdit}
            toggleChooseMemberMode={toggleChooseMemberMode}
          />
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
