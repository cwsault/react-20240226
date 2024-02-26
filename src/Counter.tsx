import { useCallback } from 'react';
import './Counter.css';

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Counter = (props: CounterProps) => {
  const { value, onChange } = props;
  const onIncrement = useCallback(() => onChange(value + 1), [value, onChange]);
  const onDecrement = useCallback(() => onChange(value - 1), [value, onChange]);

  return (
    <div className='counter'>
      <button className='counter-control decrement' onClick={onDecrement}>-</button>
      <span className='counter-value'>{value}</span>
      <button className='counter-control increment' onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
