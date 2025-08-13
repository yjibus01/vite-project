import '../styles/MessageList.css';

export default function MessageList({ name, messages }) {
  return (
    <div className="message-card">
      <h3 className="message-title">💬 {name}의 말</h3>
      <div className="message-container">
        {messages.map((m, i) => (
          <div key={i} className="message-bubble">{m}</div>
        ))}
      </div>
    </div>
  );
}
