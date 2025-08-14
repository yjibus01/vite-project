// Intro.jsx
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🐾 치즈볼 키우기 게임 🐾</h1>
      <p>시작하려면 아래 버튼을 누르세요!</p>
      <Link to="/game">
        <button>게임 시작</button>
      </Link>
    </div>
  )
}
