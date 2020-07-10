import { useState, useEffect } from 'react'
import { MembersDbRef } from '../base'

function useMembers() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    MembersDbRef.onSnapshot(snapshot => {
      const newMembers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setMembers(newMembers)
    })
  }, [])

  function fetchMembers() {
    return MembersDbRef.get().then(querySnapshot => {
      let membersData = []
      querySnapshot.forEach(member => {
        membersData.push(member.data())
      })
      return membersData
    })
  }

  function getMembers() {
    return fetchMembers()
  }

  function postMember(data) {
    return (
      MembersDbRef.doc(data.id.toString()).set(data),
      MembersDbRef.doc(data.id.toString())
        .get()
        .then(memberRef => {
          const memberId = memberRef.id
          MembersDbRef.doc(memberId).update({
            id: memberId,
            // here you can enreach the doc with states from the application!
          })
          return memberId
        })
        .then(memberId => {
          return MembersDbRef.doc(memberId)
            .get()
            .then(member => {
              if (member.exists) {
                return member.data()
              }
            })
        })
    )
  }

  function deleteMember(memberId) {
    MembersDbRef.doc(memberId).delete()
  }

  function patchMember(memberId, data) {
    return MembersDbRef.doc(memberId)
      .update(data)
      .then(() => {
        return MembersDbRef.doc(memberId)
          .get()
          .then(member => {
            if (member.exists) {
              return member.data()
            }
          })
      })
  }

  return {
    members,
    setMembers,
    getMembers,
    postMember,
    patchMember,
    deleteMember,
  }
}

export default useMembers
