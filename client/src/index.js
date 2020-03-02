import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './components/utils/GlobalStyles'

ReactDOM.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
  document.getElementById('root')
)
