import '../../styles/Shop.css';
import ShopItem from './ShopItem';

export default function Shop({ items, money, feedCount, onFeed }) {
  return (
    <div className="shop-card">
      <h2 className="shop-title">🛒 먹이 상점</h2>
      <div className="shop-grid">
        {items.map(item => (
          <ShopItem
            key={item.id}
            item={item}
            affordable={money >= item.price}
            count={feedCount[item.id]}
            onClick={() => onFeed(item)}
          />
        ))}
      </div>
    </div>
  );
}
