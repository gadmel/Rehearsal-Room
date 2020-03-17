import React from 'react'
import ControlBar from './ControlBar'

export default {
  title: 'src/components/pages/MembersPage/components/ControlBar',
  component: ControlBar,
}

export const ControlBarUnstyled = () => (
  <>
    <ControlBar toggleForm={() => {}} formIsVisible={false} />
  </>
)

export const ControlBarDisabledUnstyled = () => (
  <>
    <ControlBar toggleForm={() => {}} formIsVisible={true} />
  </>
)
