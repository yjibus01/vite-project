import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Tamagotchi.jsx'
import './Tamagotchi.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
