import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  const { getByText } = render(<App />)
  const appHeaderElement = getByText(/Rehearsal Room/i)
  expect(appHeaderElement).toBeInTheDocument()
})
