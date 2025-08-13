import './styles/Tamagotchi.css';
import { useTamagotchi } from './tamagotchiLogic';
import Header from './components/Header';
import PetStatus from './components/PetStatus/PetStatus';
import MessageList from './components/MessageList';
import Shop from './components/Shop/Shop';

export default function Tamagotchi() {
  const {
    pet, feedItems, feedCount, totalMoney, messages,
    feedPet, getPetEmoji, getStatusColor
  } = useTamagotchi();

  const totalFeed = Object.values(feedCount).reduce((a, b) => a + b, 0);

  return (
    <div className="tamagotchi-container">
      <Header money={totalMoney} />

      <div className="main-grid">
        <PetStatus
          pet={pet}
          getPetEmoji={getPetEmoji}
          getStatusColor={getStatusColor}
          totalFeed={totalFeed}
        />
        <MessageList name={pet.name} messages={messages} />
      </div>

      <Shop
        items={feedItems}
        money={totalMoney}
        feedCount={feedCount}
        onFeed={feedPet}
      />
    </div>
  );
}
