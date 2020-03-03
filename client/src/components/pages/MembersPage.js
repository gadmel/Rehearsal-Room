import React from 'react'
import styled from 'styled-components'

export function MembersVisualisation({ members }) {
  return (
    <Grid>
      <Visualisation>
        {members.map(member => (
          <MemberCard key={member.id}>
            <Avatar src={member.avatar} />
            <Column>
              <Name>{member.name}</Name>
              <Row>
                {member.roles &&
                  member.roles.map(role => <Tag key={role}>{role}</Tag>)}
              </Row>
              {member.band ? member.band : member.name}:{' '}
              {member.repetitionDayTime &&
                member.repetitionDayTime.map(repetitionTime => (
                  <Column key={repetitionTime}>{repetitionTime}</Column>
                ))}
              <Row>
                {member.instruments &&
                  member.instruments.map(instrument => (
                    <Tag key={member.id + instrument}>{instrument}</Tag>
                  ))}
              </Row>
              {console.info(member.name + ' has the id: ' + member.id)}
            </Column>
          </MemberCard>
        ))}
      </Visualisation>
      <ControlBar>Controls</ControlBar>
    </Grid>
  )
}
const Grid = styled.main`
  grid-area: stage;
  display: grid;
  grid-template-rows: auto 100px;
  grid-template-areas: 'visualisation' 'controls';
  margin: 0;
`
const ControlBar = styled.section`
  grid-area: controls;
`

const Visualisation = styled.section`
  grid-area: visualisation;
  display: flex;
  height: 100%;
  margin: 0;
  padding: 12px 12px 16px 12px;
  background: #1d80d1;
  color: white;
  align-items: flex-start;
  overflow-x: auto;
`
const MemberCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #145991;
  margin-right: 24px;
  min-width: 75vw;
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
