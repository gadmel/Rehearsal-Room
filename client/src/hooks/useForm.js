import React, { useState } from 'react'

// import { useToggle } from 'react-hooks-lib'

export default function useForm() {
  const [formIsVisible, setIsVisible] = useState(false)

  function toggleForm() {
    setIsVisible(!formIsVisible)
  }

  return { formIsVisible, toggleForm }
}
