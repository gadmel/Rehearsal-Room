import React from 'react'
import styled from 'styled-components'

export function MembersVisualisation({ members }) {
  return (
    <Visualisation>
      {members.map(member => (
        <MemberCard key={member.id}>
          <h3>{member.name}</h3>
          <ul>
            {member.instruments &&
              member.instruments.map(instrument => (
                <li key={member.id + instrument}>{instrument}</li>
              ))}
          </ul>
          <h4>ID: {member.id}</h4>
          <ul css="padding: 0; margin: 0;">
            {member.roles &&
              member.roles.map(role => <Tag key={role}>{role}</Tag>)}
          </ul>{' '}
        </MemberCard>
      ))}
    </Visualisation>
  )
}

const Visualisation = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 8px;
  grid-area: stage;
  background: transparent;
  color: white;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`
const MemberCard = styled.article`
  display: flex;
  width: 100%;
`

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8em;
  padding: 0 6px;
  background: beige;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 4px;
  color: #135285;
  font-weight: bold;
`
