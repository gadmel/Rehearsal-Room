import { useState } from 'react'

export default function useForm() {
  const [formIsVisible, setIsVisible] = useState(false)
  let [instrumentsState, setInstrumentsState] = useState([])

  function toggleForm() {
    setIsVisible(!formIsVisible)
  }

  function addInstrument(event) {
    setInstrumentsState([...instrumentsState, event.target.newInstrument.value])
    console.log('instruments are: ' + instrumentsState)
  }

  return { formIsVisible, toggleForm, instrumentsState, addInstrument }
}
