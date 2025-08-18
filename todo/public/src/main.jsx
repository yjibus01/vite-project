import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'   // ✅ 여기 App.jsx 맞는지 확인
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)