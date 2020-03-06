import React from 'react'
import styled from 'styled-components'

function Member({ member }) {
  return (
    <MemberCard key={member.id + 'visualisation'}>
      <Avatar
        src={member.avatar ? member.avatar : './guitars.png'}
        key={member.id + 'avatar'}
      />
      <Column key={member.id + 'info'}>
        <Name key={member.name + member.id}> {member.name}</Name>
        <Row key={member.id + 'roles'}>
          {member.roles.map(
            role => (
              (<Tag key={member.id + 'role:' + role}>{role}</Tag>),
              console.log(member.roles)
            )
          )}
        </Row>
        {member.band ? member.band : member.name}:{' '}
        {member.repetitionDayTime &&
          member.repetitionDayTime.map(repetitionTime => (
            <Column key={repetitionTime}>{repetitionTime}</Column>
          ))}
        <Row key={member.id + 'instruments'}>
          {member.instruments &&
            member.instruments.map(instrument => (
              <Tag key={member.id + instrument}>{instrument}</Tag>
            ))}
        </Row>
        {console.info(member.name + ' has the id: ' + member.id)}
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
