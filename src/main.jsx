// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './Intro.jsx'
import Tamagotchi from './Tamagotchi.jsx'
import ShopPage from './ShopPage';

import './styles/Tamagotchi.css'
import './styles/Header.css'
import './styles/Intro.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/vite-project">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/game" element={<Tamagotchi />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
