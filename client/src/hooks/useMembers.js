import { useState, useEffect } from 'react'
import { firebaseApp } from '../base'

function useMembers() {
  const [members, setMembers] = useState([])

  useEffect(
    () => {
      firebaseApp
        .firestore()
        .collection('members')
        .onSnapshot(snapshot => {
          const newMember = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          setMembers(newMember)

          // addMemberDb(newMember)
        })
    },
    { members }
  )

  // function addMemberDb(member) {
  //   firebaseApp
  //     .firestore()
  //     .collection('members')
  //     .doc(member.id)
  //     .set(member)
  // }
  return { members, setMembers } // addMemberDb
}

export default useMembers
