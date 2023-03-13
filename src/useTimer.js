import { useState, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
const useTimer = (initial = 0) => {
  const [time, setTime] = useState(0);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        // The argument passed into setTime must be 'time' for the timer to work
        // eslint-disable-next-line no-shadow
        setTime((time) => time + 1);
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
