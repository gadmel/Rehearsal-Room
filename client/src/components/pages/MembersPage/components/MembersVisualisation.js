import React from 'react'
import styled from 'styled-components'
import Member from './MemberCard'

export function Visualisation({ members, deleteMember }) {
  return (
    <VisualisationStyled>
      {members &&
        members.map(member => (
          <Member
            key={member.id + 'visualisation'}
            member={member}
            deleteMember={deleteMember}
          />
        ))}
    </VisualisationStyled>
  )
}

export function VisualisationDisabled({ members }) {
  return (
    <VisualisationDisabledStyled>
      {members &&
        members.map(member => (
          <Member key={member.id + 'visualisationDisabled'} member={member} />
        ))}
    </VisualisationDisabledStyled>
  )
}

const VisualisationStyled = styled.section`
  grid-area: visualisation;
  display: flex;
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 12px 12px 16px 12px;
  background: #d5c9b7;
  /* #1d80d1; */
  color: white;
  align-items: flex-start;
  overflow-x: auto;
  position: relative;
`

const VisualisationDisabledStyled = styled(VisualisationStyled)`
  filter: brightness(50%);
  pointer-events: none;
`
