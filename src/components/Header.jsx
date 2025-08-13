import '../styles/Header.css';

export default function Header({ money }) {
  return (
    <header className="header">
      <h1>😺 치즈볼 키우기 😺</h1>
      <p className="money">💰 {money.toLocaleString()}원</p>
    </header>
  );
}
