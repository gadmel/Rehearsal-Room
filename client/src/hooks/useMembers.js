import { useState, useEffect } from 'react'
import { firebaseApp, MembersDbRef, storageRef } from '../base'

function useMembers() {
  const [members, setMembers] = useState([])

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
      MembersDbRef.doc(data.id).set(data),
      MembersDbRef.doc(data.id)
        .get()
        .then(memberRef => {
          const memberId = memberRef.id
          MembersDbRef.doc(memberId).update({
            id: memberId,
            // here I could enreach the doc with states from the application!
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
        .catch(error => {
          console.error('Error adding new member: ', error)
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

  useEffect(() => {
    MembersDbRef.onSnapshot(snapshot => {
      const newMembers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setMembers(newMembers)
    })
  }, [setMembers])

  // useEffect(() => {
  //   getMembers().then(res => setMembers(res))
  // }, [setMembers])

  // useEffect(() => {
  //   MembersDbRef.onSnapshot(snapshot => {
  //     const promises = snapshot.docs.map(doc =>
  //       storageRef.child(doc.data().userPicPath).getDownloadUrl()
  //     )
  //     Promise.all(promises).then(downloadPaths => {
  //       const newMembers = snapshot.docs.map((member, index) => ({
  //         id: member.id,
  //         ...member.data(),
  //         userPicPath: downloadPaths[index],
  //       }))
  //       setMembers(newMembers)
  //     })
  //   })
  // }, [])
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
