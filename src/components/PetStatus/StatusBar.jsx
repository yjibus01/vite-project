// StatusBar.jsx
import '../../styles/StatusBar.css';

export default function StatusBar({ label, value, icon }) {
  const getStatusColor = (v) => {
    if (v >= 70) return 'status-good';
    if (v >= 40) return 'status-medium';
    return 'status-bad';
  };

  return (
    <div className="status-item">
      <div className="status-header">
        <span>{icon} {label}</span>
        <span className={`status-value ${getStatusColor(value)}`}>
          {value}%
        </span>
      </div>
      <div className="status-bar">
        <div
          className={`status-fill ${getStatusColor(value)}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
