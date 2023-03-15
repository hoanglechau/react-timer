import { useState, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
const useTimer = (initialState = 0) => {
  // can pass different initial values to this custom hook
  const [time, setTime] = useState(initialState);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        // eslint-disable-next-line no-shadow
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return {
    time, startTimer, stopTimer, resetTimer, active,
  };
};
export default useTimer;
