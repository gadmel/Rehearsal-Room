import { useState } from 'react'

export default function useForm() {
  const [formIsVisible, setIsVisible] = useState(false)
  let [newMembersInstruments, setNewMembersInstruments] = useState([])
  // think of better function names
  let [stateOfAMemberToEdit, setStateOfAMemberToEdit] = useState({})
  //   function reducer(state, { field, value }) {
  //     return { ...state, [field]: value }
  //   }
  //   const [state, dispatch] = useReducer(reducer, initialState)
  // const onChange = (event) => dispatch({field: event.target.name, value: event.target.value})
  //

  function toggleForm() {
    setIsVisible(!formIsVisible)
  }

  function fillFormWithData(Member) {
    console.log(Member)
    setStateOfAMemberToEdit(Member)
    console.log(stateOfAMemberToEdit)
  }
  //
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
    fillFormWithData,
    newMembersInstruments,
    addNewMembersInstrument,
    removeNewMembersInstrument,
    resetNewMembersInstruments,
    stateOfAMemberToEdit,
    setStateOfAMemberToEdit,
  }
}
