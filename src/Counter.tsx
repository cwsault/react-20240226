import { useCallback } from 'react';

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
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
