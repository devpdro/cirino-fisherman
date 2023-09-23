import React from 'react'
import ReactDOM from 'react-dom/client'

import 'main/config/fonts.scss'

import 'presentation/styles/global.scss'
import { App } from './App'
import { reportWebVitals } from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
