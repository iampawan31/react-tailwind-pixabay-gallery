import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Maintenance from './Maintenance'

ReactDOM.render(
  <React.StrictMode>
    {process.env.APP_ENV === 'maintenance' ? <Maintenance /> : <App />}
  </React.StrictMode>,
  document.getElementById('root')
)
