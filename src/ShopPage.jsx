import { useState } from 'react';
import CounterList from './components/MultiCounter/CounterList';
import Total from './components/MultiCounter/Total';
import './styles/ShopPage.css';

function App() {
  // const [counters, setCounters] = useState([0, 0, 0]); // 카운터 상태 배열
  const [counters, setCounters] = useState([100, 2]);
  // useState() 훅에 초기값을 설정해서 내가 원하는 카운터 갯수대로 만들어 넣음

  // 특정 카운터 증가
  const increase = (index) => {
    // 해당카운터의 인덱스 번호를 매개변수로 넣어 함수 실행
    setCounters((prev) =>
      // setCounters()로 이전값(배열)이 들어오면, 그 값을 map()으로 돌려 값을 수정하고 부모의 상태값이 변경되도록 함
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  // 특정 카운터 감소
  const decrease = (index) => {
    setCounters((prev) =>
      prev.map((count, i) => (i === index ? count - 1 : count))
    );
  };

  // 새로운 카운터 추가
  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    <>
      <h1>멀티 카운터</h1>
      <CounterList
        counters={counters}
        onIncrease={increase}
        onDecrease={decrease}
      />
      <button onClick={addCounter}> 카운터 추가 </button>
      <Total counters={counters} />
    </>
  );
}

export default App;