import React from 'react'
import styled from 'styled-components'

function MemberProfile({ member, deleteMember }) {
  return (
    <Member key={member.id + '_visualisation'}>
      <DeleteMember
        key={member.id + '_deleteButton'}
        onClick={() => {
          deleteMember(member.id)
        }}
      >
        <i
          className="fas fa-minus-circle"
          style={{ background: 'transparent' }}
        ></i>
      </DeleteMember>

      <Avatar
        src={member.avatar ? member.avatar : './guitars.png'}
        key={member.id + '_avatar'}
      />
      <Column key={member.id + '_info'}>
        <Name key={member.name + member.id}> {member.name}</Name>
        <Row key={member.id + '_roles'}>
          {member.roles &&
            member.roles.map(role => (
              <Tag key={member.id + '_role_' + role}>{role}</Tag>
            ))}
        </Row>
        {member.band ? member.band : member.name}:{' '}
        {member.repetitionDayTime &&
          member.repetitionDayTime.map(repetitionTime => (
            <Column key={repetitionTime}>{repetitionTime}</Column>
          ))}
        <Row key={member.id + '_instruments'}>
          {member.instruments &&
            member.instruments.map(instrument => (
              <Tag key={member.id + '_' + instrument}>{instrument}</Tag>
            ))}
        </Row>
      </Column>
    </Member>
  )
}
export default MemberProfile

const Member = styled.article`
  display: flex;
  flex-direction: column;
  background: #3a5e85;
  margin-right: 24px;
  min-width: 240px;
  max-width: 75vw;
  height: 100%;
  box-shadow: 8px 5px 6px #0a2a45;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
  background: transparent;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
  height: 100%;
  padding: 0 8px;
`

const Avatar = styled.img`
  max-width: 100%;
  max-height: 200px;
  min-height: 200px;
  object-fit: cover;
`
const Name = styled.h3`
  min-width: fit-content;
  background: transparent;
  margin: 6px 0 0 0;
  font-size: 1.75em;
`

const Tag = styled.li`
  display: inline-block;
  font-size: 0.86em;
  margin: 4px 8px 8px 0;
  padding: 1px 6px;
  background: #9bb5d1;
  border: 2px solid #243a52;
  border-radius: 3px;
  color: #243a52;
  font-weight: bold;
`

const DeleteMember = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  background-color: white;
  color: #3a5e85;
  margin-left: 8px;
  margin-top: 8px;
  padding: 4px;
  border-radius: 50%;
  &:hover {
    color: #3a5e85;
    background: #9bb5d1;
  }
`
