import { useState } from 'react'

export default function useForm() {
  const [newMembersInstruments, setNewMembersInstruments] = useState([])

  const [controlledInputValues, setControlledInputValues] = useState([])

  const handleInputChange = event => {
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
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
  }
}
