import React from 'react'
import { ControlBar, ControlBarDisabled } from './ControlBar'
export default {
  title: 'src/components/pages/MembersPage/components/ControlBar',
  component: ControlBar,
}

// const controlBarStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   height: '70%',
//   width: '70%',
//   padding: '8px',
//   border: '2px solid beige',
//   boxShadow: '8px 5px 6px #0a2a45',
//   justifySelf: 'center',
//   alignSelf: 'center',
//   position: 'absolute',
//   gridArea: 'stage',
//   zIndex: '100',
//   alignItems: 'flex-start',
//   justifyContent: 'space-between',
// }

export const ControlBarUnstyled = () => (
  <>
    <ControlBar
      // style={controlBarStyle}
      toggleForm={() => {}}
    />
  </>
)

export const ControlBarDisabledUnstyled = () => (
  <>
    <ControlBarDisabled
      // style={controlBarStyle}
      toggleForm={() => {}}
    />
  </>
)
