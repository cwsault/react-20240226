import { useMemo } from 'react';
import './TrafficLight.css';

interface TrafficLightState {
  value: number;
  label: string;
}

function getLightColor(value: number) {
  const modValue = Math.abs(value) % 3;
  switch (modValue) {
    case 0: return 'red';
    case 1: return 'yellow';
    case 2: return 'green';
    default: throw new Error('invalid value');
  }
}

const TrafficLight = ({ state }: { state: TrafficLightState; }) => {
  const color = useMemo(() => getLightColor(state.value), [state.value]);

  return (
    <div className='traffic-light'>
      <div className='light-opening'>
        <div className={`light ${color}`}></div>
      </div>
      <div className='label'>
        {state.label}
      </div>
    </div>
  );
};

export default TrafficLight;
