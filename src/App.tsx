import { useCallback, useState } from 'react';
import Counter from './Counter';
import TrafficLight from './TrafficLight';
import './App.css';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const updateCounter1 = useCallback((newValue: number) => {
    setCounter1(newValue);
    setTotalClicks(totalClicks + 1);
  }, [totalClicks]);

  const updateCounter2 = useCallback((newValue: number) => {
    setCounter2(newValue);
    setTotalClicks(totalClicks + 1);
  }, [totalClicks]);

  return (
    <div className='App'>
      <div id='total-clicks'>
        Total clicks = {totalClicks}
      </div>

      <Counter value={counter1} onChange={updateCounter1} />
      <Counter value={counter2} onChange={updateCounter2} />

      <TrafficLight />
    </div>
  );
};

export default App;
