import './TrafficLight.css';

const TrafficLight = () => {
  return (
    <div className='traffic-light'>
      <div className='light-opening'>
        <div className='light'></div>
      </div>
      <div className='label'>
        Test Label
      </div>
    </div>
  );
};

export default TrafficLight;
