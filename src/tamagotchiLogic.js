import { useState, useEffect } from 'react';

// 커스텀 훅 - 다마고치 로직
export function useTamagotchi() {
  // 펫 상태
  const [pet, setPet] = useState({
    name: '치즈볼',
    level: 1,
    hunger: 50,
    happiness: 50,
    energy: 50,
    size: 100, // CSS에서 크기 조절용
    age: 0
  });

  // 먹이 아이템들
  const feedItems = [
    {
      id: 1,
      name: "츄르",
      effect: { hunger: +20, energy: +15, happiness: +5 },
      price: 300,
      emoji: "🍯",
      description: "고양이가 가장 좋아하는 간식"
    },
    {
      id: 2,
      name: "통살 간식",
      effect: { hunger: +15, happiness: +20, energy: +5 },
      price: 800,
      emoji: "🍗",
      description: "맛있는 통살 간식"
    },
    {
      id: 3,
      name: "프리미엄 사료",
      effect: { hunger: +25, happiness: +10, energy: +20 },
      price: 1600,
      emoji: "🥫",
      description: "영양 만점 고급 사료"
    }
  ];

  const [feedCount, setFeedCount] = useState({ 1: 0, 2: 0, 3: 0 });
  const [totalMoney, setTotalMoney] = useState(5000);
  const [messages, setMessages] = useState(['안녕! 나는 치즈볼이야! 😽']);

  // 펫 상태 변화 (시간에 따라)
  useEffect(() => {
    const timer = setInterval(() => {
      setPet(prev => ({
        ...prev,
        hunger: Math.max(0, prev.hunger - 2),
        happiness: Math.max(0, prev.happiness - 1),
        energy: Math.max(0, prev.energy - 1),
        age: prev.age + 1
      }));
    }, 5000); // 5초마다

    return () => clearInterval(timer);
  }, []);

  // 레벨업 체크
  useEffect(() => {
    const totalFeeds = Object.values(feedCount).reduce((sum, count) => sum + count, 0);
    const newLevel = Math.floor(totalFeeds / 5) + 1;
    
    if (newLevel > pet.level) {
      setPet(prev => ({ ...prev, level: newLevel, size: prev.size + 15 }));
      addMessage(`레벨업! 이제 ${newLevel}레벨이야! 🎉`);
      // 레벨업 보상
      setTotalMoney(prev => prev + newLevel * 200);
    }
  }, [feedCount, pet.level]);

  // 메시지 추가 함수
  const addMessage = (message) => {
    setMessages(prev => [...prev.slice(-4), message]); // 최근 5개만 보관
  };

  // 먹이 주기 함수
  const feedPet = (item) => {
    if (totalMoney < item.price) {
      addMessage('돈이 부족해...돈 더 벌어와 주인아! 😢');
      return;
    }

    setTotalMoney(prev => prev - item.price);
    setFeedCount(prev => ({ ...prev, [item.id]: prev[item.id] + 1 }));
    
    setPet(prev => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + item.effect.hunger),
      happiness: Math.min(100, prev.happiness + item.effect.happiness),
      energy: Math.min(100, prev.energy + item.effect.energy)
    }));

    // 펫 반응
    const reactions = [
      `${item.emoji} 맛있어! 고마워!`,
      `냠냠! ${item.name} 좋아해!`,
      `더 커졌나? 히히!`,
      `행복해! 더 줘! 🥰`,
      `${item.name} 최고야! 🤤`,
      `배가 부르다~ 고마워! 😊`
    ];
    addMessage(reactions[Math.floor(Math.random() * reactions.length)]);
  };

  // 펫 상태에 따른 이모지
  const getPetEmoji = () => {
    if (pet.happiness > 80) return '🐱'; // 행복한 고양이
    if (pet.hunger < 20) return '😾'; // 배고파서 화난 모습
    if (pet.energy < 20) return '😿'; // 졸린 모습
    if (pet.happiness > 60) return '🐱'; // 기본 행복
    if (pet.hunger < 50) return '🙀'; // 조금 배고픔
    return '😺'; // 기본 고양이
  };

  // 상태 색깔 클래스
  const getStatusColor = (value) => {
    if (value > 70) return 'status-good';
    if (value > 30) return 'status-medium';
    return 'status-bad';
  };

  // 자동 돈 벌기 (시간이 지나면서 조금씩)
  useEffect(() => {
    const moneyTimer = setInterval(() => {
      setTotalMoney(prev => prev + Math.floor(pet.level * 0.5) + 1);
    }, 5000); // 5초마다 조금씩

    return () => clearInterval(moneyTimer);
  }, [pet.level]);

  // 상태 경고 메시지
  useEffect(() => {
    if (pet.hunger < 20 && pet.hunger > 0) {
      addMessage('배가 너무 고파... 😿');
    }
    if (pet.happiness < 20 && pet.happiness > 0) {
      addMessage('심심해... 놀아줘! 😢');
    }
    if (pet.energy < 20 && pet.energy > 0) {
      addMessage('너무 피곤해... 😴');
    }
  }, [pet.hunger, pet.happiness, pet.energy]);

  return {
    pet,
    feedItems,
    feedCount,
    totalMoney,
    messages,
    feedPet,
    getPetEmoji,
    getStatusColor
  };
}