// import { action } from '@storybook/addon-actions'
// import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import React from 'react'
import CreateForm from './CreateForm'
export default {
  title: 'src/components/pages/MembersPage/components/CreateForm',
  component: CreateForm,
}

const members = [
  {
    id: '001',
    name: 'Viktor Miller',
    avatar: './viktor_miller.jpg',
    band: '',
    instruments: ['vocals', 'guitar'],
    roles: ['musician'],
    roomAsignment: 'RehearsalRoom_1',
    repetitionDayTime: ['Wendsday, 18:00 - 24:00'],
  },
]
const bands = [
  { value: 'Nerull', name: 'Nerull' },
  { value: 'ToNe Dayzy', name: 'ToNe Dayzy' },
]

export const UnstyledCreateForm = () => (
  <CreateForm
    members={members}
    setMembers={() => {}}
    postMember={() => {}}
    newMembersInstruments={[]}
    addNewMembersInstrument={() => {}}
    resetNewMembersInstruments={() => {}}
    bands={bands}
    setBands={() => {}}
    toggleForm={true}
  />
)
