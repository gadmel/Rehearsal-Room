import React from 'react'
import styled from 'styled-components'
import MemberProfile from './MemberProfile'

function MemberProfilesList({ members, deleteMember, formIsVisible }) {
  return (
    <>
      {formIsVisible ? (
        <MemberProfilesListDisabledStyled>
          {members &&
            members.map(member => (
              <MemberProfile
                key={member.id + '_visualisation_Disabled'}
                member={member}
              />
            ))}
        </MemberProfilesListDisabledStyled>
      ) : (
        <MemberProfilesListStyled>
          {members &&
            members.map(member => (
              <MemberProfile
                key={member.id + '_visualisation'}
                member={member}
                deleteMember={deleteMember}
              />
            ))}
        </MemberProfilesListStyled>
      )}
    </>
  )
}

export default MemberProfilesList

const MemberProfilesListStyled = styled.section`
  grid-area: visualisation;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 12px 12px 16px 12px;
  background: #d5c9b7;
  color: white;
  align-items: flex-start;
  overflow-x: auto;
  position: relative;
`

const MemberProfilesListDisabledStyled = styled(MemberProfilesListStyled)`
  filter: brightness(50%);
  pointer-events: none;
`
