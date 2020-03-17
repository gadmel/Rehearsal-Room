import React from 'react'
import image_aleksey_tietz from './images/aleksey_tietz.jpeg'
import MemberProfile from './MemberProfile'

const member = {
  id: '002',
  avatar: image_aleksey_tietz,
  band: 'XYNior',
  instruments: ['vocals', 'guitar'],
  name: 'Alexey Tietz',
  repetitionDayTime: ['Friday, 16:00 - 19:00', 'Sunday, 14:00 - 22:00'],
  roles: ['administrator', 'musician'],
  roomAssignment: 'RehearsalRoom_1',
}

export default {
  title: 'src/components/pages/MembersPage/components/MemberProfile',
  component: MemberProfile,
}

export const UnstyledMemberCard = () => (
  <MemberProfile
    style={{ margin: '20px', justifySelf: 'center' }}
    member={member}
  ></MemberProfile>
)
