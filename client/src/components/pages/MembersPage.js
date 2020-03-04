import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Member from '../MemberCard'
import CreateForm from '../CreateForm'
import { ControlBar, ControlBarDisabled } from '../ControlBar'

import useForm from '../../hooks/useForm'

export function MembersVisualisation({ members }) {
  const { formIsVisible, toggleForm } = useForm()

  return (
    <Switch>
      <Grid>
        <Route exact path="/">
          {formIsVisible ? (
            <>
              <CreateForm />
              <VisualisationDisabled>
                {members.map(member => (
                  <Member key={member.id} member={member} />
                ))}
              </VisualisationDisabled>
              <ControlBarDisabled toggleForm={toggleForm} />
            </>
          ) : (
            <>
              <Visualisation>
                {members.map(member => (
                  <Member key={member.id} member={member} />
                ))}
              </Visualisation>
              <ControlBar toggleForm={toggleForm} />
            </>
          )}
        </Route>
      </Grid>
    </Switch>
  )
}
const Grid = styled.main`
  grid-area: stage;
  display: grid;
  grid-template-rows: auto 130px;
  grid-template-areas: 'visualisation' 'controls';
  margin: 0;
`

const Visualisation = styled.section`
  grid-area: visualisation;
  display: flex;
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 12px 12px 16px 12px;
  background: #1d80d1;
  color: white;
  align-items: flex-start;
  overflow-x: auto;
  position: relative;
`

const VisualisationDisabled = styled(Visualisation)`
  filter: brightness(50%);
`
