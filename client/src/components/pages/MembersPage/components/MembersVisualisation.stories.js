import React from 'react'
import { Visualisation, VisualisationDisabled } from './MembersVisualisation'
import Member from './MemberCard'
import image_aleksey_tietz from './images/aleksey_tietz.jpeg'
import image_victor_miller from './images/viktor_miller.jpg'
const members = [
  {
    id: '001',
    avatar: image_victor_miller,
    band: '',
    instruments: ['vocals', 'guitar'],
    name: 'Viktor Miller',
    repetitionDayTime: ['Wendsday, 18:00 - 24:00'],
    roles: ['musician'],
    roomAssignment: 'RehearsalRoom_1',
  },
  {
    id: '002',
    avatar: image_aleksey_tietz,
    band: 'XYNior',
    instruments: ['vocals', 'guitar'],
    name: 'Alexey Tietz',
    repetitionDayTime: ['Friday, 16:00 - 19:00', 'Sunday, 14:00 - 22:00'],
    roles: ['administrator', 'musician'],
    roomAssignment: 'RehearsalRoom_1',
  },
]

export default {
  title: 'src/components/pages/MembersPage/components/MembersVisualisation',
  component: Visualisation,
}

export const VisualisationUnstyled = () => {
  return (
    <Visualisation members={members}>
      <Member member={members[0]} />
      <Member member={members[1]} />
    </Visualisation>
  )
}

export const visualisationDisabledUnstyled = () => {
  return (
    <VisualisationDisabled members={members}>
      <Member member={members[0]} />
      <Member member={members[1]} />
    </VisualisationDisabled>
  )
}
