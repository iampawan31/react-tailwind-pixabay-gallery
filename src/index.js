import React from 'react'
import ReactDOM from 'react-dom'
import './assets/main.css'
import App from './App'
import Maintenance from './Maintenance'

ReactDOM.render(
  <React.StrictMode>
    {process.env.APP_ENV === 'maintenance' ? <Maintenance /> : <App />}
  </React.StrictMode>,
  document.getElementById('root')
)
