import React, { useState } from 'react'
import styled from 'styled-components'
import CreateForm from './components/CreateForm/CreateForm'
import ControlBar from './components/ControlBar'
import MemberProfilesList from './components/MemberProfilesList'

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
  const [formIsVisible, setFormIsVisible] = useState(false)
  function toggleForm() {
    setFormIsVisible(!formIsVisible)
  }

  return (
    <Grid>
      <CreateForm
        members={members}
        setMembers={setMembers}
        postMember={postMember}
        bands={bands}
        setBands={setBands}
        formIsVisible={formIsVisible}
        toggleForm={toggleForm}
      />
      <MemberProfilesList
        members={members}
        deleteMember={deleteMember}
        formIsVisible={formIsVisible}
      />
      <ControlBar toggleForm={toggleForm} formIsVisible={formIsVisible} />
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
