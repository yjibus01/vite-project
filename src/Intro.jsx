// Intro.jsx
import { useNavigate } from 'react-router-dom'
import './styles/Intro.css'

export default function Intro() {
  const navigate = useNavigate()

  return (
    <div className="intro-page">
      <h1>🐾 치즈볼 키우기 게임 🐾</h1>
      <p>시작하려면 아래 버튼을 누르세요!</p>
      <button className="btn" onClick={() => navigate('/game')}>GAME START</button>

  {/* 구름 추가 */}    
     <div
        className="cloud-small"
        style={{ top: '50px', left: '100px', position: 'absolute' }}
      ></div>

      <div
        className="cloud-large"
        style={{ top: '120px', left: '250px', position: 'absolute' }}
      ></div>
    </div>
  )
}
