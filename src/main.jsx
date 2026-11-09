import React from 'react'
import ReactDOM from 'react-dom/client'
// Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)