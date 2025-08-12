import React from 'react';
import './Tamagotchi.css';
import { useTamagotchi } from './tamagotchiLogic';

export default function Tamagotchi() {
  const {
    pet,
    feedItems,
    feedCount,
    totalMoney,
    messages,
    feedPet,
    getPetEmoji,
    getStatusColor
  } = useTamagotchi();

  return (
    <div className="tamagotchi-container">
      {/* 헤더 */}
      <header className="header">
        <h1>😺 치즈볼 키우기 😺</h1>
        <p className="money">💰 {totalMoney.toLocaleString()}원</p>
      </header>

      <div className="main-grid">
        {/* 펫 상태 */}
        <div className="pet-status-card">
          <div 
            className="pet-emoji"
            style={{ fontSize: `${pet.size}px` }}
          >
            {getPetEmoji()}
          </div>
          
          <h2 className="pet-name">
            {pet.name} (Lv.{pet.level})
          </h2>
          
          {/* 상태 바들 */}
          {[
            { label: '배고픔', value: pet.hunger, icon: '🍽️' },
            { label: '행복도', value: pet.happiness, icon: '😊' },
            { label: '에너지', value: pet.energy, icon: '⚡' }
          ].map((stat) => (
            <div key={stat.label} className="status-item">
              <div className="status-header">
                <span>{stat.icon} {stat.label}</span>
                <span className={`status-value ${getStatusColor(stat.value)}`}>
                  {stat.value}%
                </span>
              </div>
              <div className="status-bar">
                <div 
                  className={`status-fill ${getStatusColor(stat.value)}`}
                  style={{ width: `${stat.value}%` }}
                />
              </div>
            </div>
          ))}

          <p className="pet-info">
            나이: {Math.floor(pet.age / 20)}살 | 총 먹이: {Object.values(feedCount).reduce((a, b) => a + b, 0)}개
          </p>
        </div>

        {/* 메시지 창 */}
        <div className="message-card">
          <h3 className="message-title">💬 {pet.name}의 말</h3>
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className="message-bubble">
                {message}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 먹이 상점 */}
      <div className="shop-card">
        <h2 className="shop-title">🛒 먹이 상점</h2>
        
        <div className="shop-grid">
          {feedItems.map(item => (
            <div 
              key={item.id} 
              className={`shop-item ${totalMoney < item.price ? 'disabled' : ''}`}
              onClick={() => feedPet(item)}
            >
              <div className="item-emoji">{item.emoji}</div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-effects">
                <span className="effect-hunger">배고픔 +{item.effect.hunger}</span>
                <span className="effect-happiness">행복 +{item.effect.happiness}</span>
                <span className="effect-energy">에너지 +{item.effect.energy}</span>
              </div>
              <div className="item-price">
                {item.price.toLocaleString()}원
              </div>
              <div className="item-count">
                먹인 횟수: {feedCount[item.id]}회
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}