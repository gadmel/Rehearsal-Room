import { useState } from 'react'

export default function useForm() {
  const [formIsVisible, setIsVisible] = useState(false)
  let [newMembersInstruments, setNewMembersInstruments] = useState([])

  function toggleForm() {
    setIsVisible(!formIsVisible)
  }

  function addNewMembersInstrument(newInstrument) {
    setNewMembersInstruments([...newMembersInstruments, newInstrument])
  }

  function removeNewMembersInstrument(instrumentToRemove) {
    const newMembersInstrumentsWithoutTheInstrumentToDelete = newMembersInstruments.filter(
      function(instrument) {
        return instrument !== instrumentToRemove
      }
    )
    setNewMembersInstruments(newMembersInstrumentsWithoutTheInstrumentToDelete)
  }

  function resetNewMembersInstruments() {
    setNewMembersInstruments([])
  }

  return {
    formIsVisible,
    toggleForm,
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
  }
}
