import { useState, useRef } from "react";

// creating a custom hook for timer
export const useTimer = (maxTimer: number, isFinished?: boolean) => {
  // custom hook can return something or just does something dont return any think
  const [timer, setTimer] = useState(maxTimer);
  const interval = useRef<NodeJS.Timeout>();
  // woking for timer
  const startTimer = () => {
    if (isFinished) return;
    setTimer(maxTimer);
    interval.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    // return () => {
    //   clearInterval(interval);
    // };
  };
  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return {
    timer,
    startTimer,
    clearTimer,
  };
};
