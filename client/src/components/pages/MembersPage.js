import React from 'react'
import styled from 'styled-components'

export function MembersVisualisation({ members }) {
  return (
    <Visualisation>
      {members.map(member => (
        <MemberCard key={member.id}>
          <Row>
            <Avatar src={member.avatar} />
            <Column>
              <Name>{member.name}</Name>
              <Id>ID: {member.id}</Id>
              <Row>
                {member.roles &&
                  member.roles.map(role => <Tag key={role}>{role}</Tag>)}
              </Row>
              <span>
                {member.band ? member.band : member.name}:{' '}
                {member.repetitionDayTime &&
                  member.repetitionDayTime.map(repetitionTime => (
                    <div>{repetitionTime}</div>
                  ))}
              </span>
            </Column>
          </Row>
          <Row>
            {member.instruments &&
              member.instruments.map(instrument => (
                <Tag key={member.id + instrument}>{instrument}</Tag>
              ))}
          </Row>
        </MemberCard>
      ))}
    </Visualisation>
  )
}

const Visualisation = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 0;
  grid-area: stage;
  background: #1d80d1;
  color: white;
  align-items: flex-start;
  overflow-x: auto;
`
const MemberCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #145991;
  margin: 12px 12px 12px 12px;
  min-width: 340px;
  height: fit-content;
  box-shadow: 8px 5px 6px #0a2a45;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;

  align-items: flex-start;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`

const Avatar = styled.img`
  max-width: 200px;
  border-radius: 4px;
  margin: 8px;
`
const Name = styled.h3`
  flex-direction: row;
  max-width: 100%;
  margin: 6px 4px;
`
const Id = styled.span`
  flex-direction: row;
  margin: 6px 4px;
`
const Tag = styled.li`
  display: inline-block;
  font-size: 0.8em;
  margin: 4px 8px;
  padding: 1px 6px;
  background: beige;
  border: 2px solid #1d80d1;
  border-radius: 3px;
  color: #135285;
  font-weight: bold;
`
