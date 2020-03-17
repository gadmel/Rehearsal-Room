import React from 'react'
import MemberProfilesList from './MemberProfilesList'
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
  title: 'src/components/pages/MembersPage/components/MemberProfilesList',
  component: MemberProfilesList,
}

export const MemberProfilesListUnstyled = () => {
  return (
    <MemberProfilesList
      members={members}
      formIsVisible={false}
    ></MemberProfilesList>
  )
}

export const MemberProfilesListDisabledUnstyled = () => {
  return (
    <MemberProfilesList
      members={members}
      formIsVisible={true}
    ></MemberProfilesList>
  )
}
