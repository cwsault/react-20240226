import { useState } from 'react';
import Counter from './Counter';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <Counter value={counter} onChange={setCounter} />
    </div>
  );
};

export default App;
