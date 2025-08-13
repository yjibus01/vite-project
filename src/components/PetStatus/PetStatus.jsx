import '../../styles/PetStatus.css';
import StatusBar from './StatusBar';

export default function PetStatus({ pet, getPetEmoji, getStatusColor, totalFeed }) {
  const stats = [
    { label: '배고픔', value: pet.hunger, icon: '🍽️' },
    { label: '행복도', value: pet.happiness, icon: '😊' },
    { label: '에너지', value: pet.energy, icon: '⚡' },
  ];

  return (
    <div className="pet-status-card">
      <div className="pet-emoji" style={{ fontSize: `${pet.size}px` }}>
        {getPetEmoji()}
      </div>

      <h2 className="pet-name">{pet.name} (Lv.{pet.level})</h2>

      {stats.map(s => (
        <StatusBar
          key={s.label}
          label={s.label}
          icon={s.icon}
          value={s.value}
          colorClass={getStatusColor(s.value)}
        />
      ))}

      <p className="pet-info">
        나이: {Math.floor(pet.age / 20)}살 | 총 먹이: {totalFeed}개
      </p>
    </div>
  );
}
