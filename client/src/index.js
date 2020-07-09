import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './components/utils/GlobalStyles'
import './components/utils/fontawesome'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)
