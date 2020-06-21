import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RootContext from './stores/RootContext'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <RootContext>
      <App />
    </RootContext>
  </React.StrictMode>,
  document.getElementById('root')
)
