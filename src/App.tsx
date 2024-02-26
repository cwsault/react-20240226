import { useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className='App'>
      <Counter value={counter1} onChange={setCounter1} />
      <Counter value={counter2} onChange={setCounter2} />
    </div>
  );
};

export default App;
