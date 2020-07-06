import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RootContext from './stores/RootContext'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import store from './stores'

ReactDOM.render(
  <React.StrictMode>
    <RootContext>
      <Provider store={store}>
        <App />
      </Provider>
    </RootContext>
  </React.StrictMode>,
  document.getElementById('root')
)
