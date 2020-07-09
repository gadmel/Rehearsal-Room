import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Member({ member, deleteMember }) {
  return (
    <MemberCard key={member.id + '_visualisation'}>
      <DeleteMember
        key={member.id + '_deleteButton'}
        onClick={() => {
          deleteMember(member.id.toString())
        }}
      >
        <FontAwesomeIcon
          icon={'minus-circle'}
          style={{ background: 'transparent' }}
        />
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
    </MemberCard>
  )
}
export default Member

const MemberCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #145991;
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
  object-fit: cover;
`
const Name = styled.h3`
  min-width: fit-content;
  background: transparent;
  margin: 6px 0 0 0;
`

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8em;
  margin: 4px 8px 8px 0;
  padding: 1px 6px;
  background: beige;
  border: 2px solid #1d80d1;
  border-radius: 3px;
  color: #135285;
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
  background-color: transparent;
  color: beige;
  margin-left: 8px;
  margin-top: 8px;
  padding: 4px;
  border-radius: 50%;
  &:hover {
    color: #135285;
    background: beige;
  }
`
