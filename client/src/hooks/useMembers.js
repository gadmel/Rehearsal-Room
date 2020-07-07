import { useState, useEffect } from 'react'
import { MembersDbRef, imagesDbRef } from '../base'

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

  function getMemberById(memberId) {
    MembersDbRef.doc(memberId).get()
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

  useEffect(() => {
    MembersDbRef.onSnapshot(snapshot => {
      //  const storage = firebase.firestore.collection('images').storage().ref()
      const newMembers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        //  imagePath: downloadURLs[index],
      }))
      setMembers(newMembers)
    })
  }, [])

  // another version
  // useEffect(() => {
  //   MembersDbRef.onSnapshot(snapshot => {
  //     const newMembers = snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }))
  //     setMembers(newMembers)
  //   })
  // }, [])

  return {
    members,
    setMembers,
    getMembers,
    getMemberById,
    postMember,
    patchMember,
    deleteMember,
  }
}

export default useMembers
