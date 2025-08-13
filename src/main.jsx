import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Tamagotchi.jsx'
import './styles/Tamagotchi.css'; // 전체 스타일
import './styles/Header.css'; // 헤더 스타일

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
