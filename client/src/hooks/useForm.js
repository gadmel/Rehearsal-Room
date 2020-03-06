import { useState } from 'react'

export default function useForm() {
  const [formIsVisible, setIsVisible] = useState(false)

  function toggleForm() {
    setIsVisible(!formIsVisible)
  }

  return { formIsVisible, toggleForm }
}
