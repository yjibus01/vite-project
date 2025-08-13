import '../../styles/ShopItem.css';

export default function ShopItem({ item, affordable, count, onClick }) {
  return (
    <div
      className={`shop-item ${affordable ? '' : 'disabled'}`}
      onClick={affordable ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (affordable && (e.key === 'Enter' || e.key === ' ') ? onClick() : null)}
    >
      <div className="item-emoji">{item.emoji}</div>
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <div className="item-effects">
        <span className="effect-hunger">배고픔 +{item.effect.hunger}</span>
        <span className="effect-happiness">행복 +{item.effect.happiness}</span>
        <span className="effect-energy">에너지 +{item.effect.energy}</span>
      </div>
      <div className="item-price">{item.price.toLocaleString()}원</div>
      <div className="item-count">먹인 횟수: {count}회</div>
    </div>
  );
}
