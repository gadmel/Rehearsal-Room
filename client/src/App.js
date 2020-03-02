import React, { useState } from 'react'

function App() {
  const [members, setMembers] = useState([
    {
      id: '001',
      name: 'Viktor Miller',
      band: 'Viktor Miller',
      instruments: ['vocals', 'guitar'],
      roles: ['musician'],
      roomAsignment: 'RehearsalRoom_1',
    },
    {
      id: '002',
      name: 'Alexey Tietz',
      band: 'XYNior',
      instruments: ['vocals', 'guitar'],
      roles: ['administrator', 'musician'],
      roomAsignment: 'RehearsalRoom_1',
    },
  ])

  return (
    <div>
      <header>Rehearsal Room</header>
      {members.map(member => (
        <article>{member.name}</article>
      ))}
    </div>
  )
}

export default App
