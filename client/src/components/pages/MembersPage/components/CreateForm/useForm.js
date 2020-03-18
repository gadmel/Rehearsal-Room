import { useState } from 'react'

export default function useForm() {
  const [newMembersInstruments, setNewMembersInstruments] = useState([])

  const [controlledInputValues, setControlledInputValues] = useState([])

  function handleInputChange(event) {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    const name = event.target.name
    setControlledInputValues(controlledInputValues => ({
      ...controlledInputValues,
      [name]: value,
    }))
  }

  function resetInputValues() {
    setControlledInputValues([])
  }

  function addNewMembersInstrument(newInstrument) {
    if (newMembersInstruments.includes(newInstrument)) {
      return
    } else {
      setNewMembersInstruments([...newMembersInstruments, newInstrument])
    }
  }

  function removeNewMembersInstrument(instrumentToDelete) {
    const newMembersInstrumentsWithoutTheInstrumentToDelete = newMembersInstruments.filter(
      instrument => instrument !== instrumentToDelete
    )
    setNewMembersInstruments(newMembersInstrumentsWithoutTheInstrumentToDelete)
  }

  function resetNewMembersInstruments() {
    setNewMembersInstruments([])
  }

  return {
    controlledInputValues,
    handleInputChange,
    resetInputValues,
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
  }
}
