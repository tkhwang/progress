import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import App from './App'
import './index.css'
import RootContext from './stores/RootContext'

ReactDOM.render(
  <React.StrictMode>
    <RootContext>
      <App />
    </RootContext>
  </React.StrictMode>,
  document.getElementById('root')
)
