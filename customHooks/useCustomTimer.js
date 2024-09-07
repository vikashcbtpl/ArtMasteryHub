import { useEffect, useRef, useState } from 'react';
import Timer from 'easytimer.js';

const useCustomTimer = (initialTime=1) => {
  const [timeLeft, setTimeLeft] = useState('00:00:00');
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const initializeTimer = (minutes) => {
    if (timerRef.current) {
      timerRef.current.stop();
    }
    timerRef.current = new Timer();

    timerRef.current.start({ countdown: true, startValues: { minutes } });

    // Update the time display every second
    timerRef.current.addEventListener('secondsUpdated', () => {
      setTimeLeft(timerRef.current.getTimeValues().toString());
    });

    // When the timer reaches zero, start with a new value
    timerRef.current.addEventListener('targetAchieved', () => {
      initializeTimer(initialTime);
    });

    setIsRunning(true);
  };

  const startTimer = (minutes = initialTime) => {
      initializeTimer(minutes);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      timerRef.current.pause();
      setIsRunning(false);
    }
  };

  const resumeTimer = () => {
    if (timerRef.current) {
      timerRef.current.start();
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    initializeTimer(initialTime);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        timerRef.current.stop();
      }
    };
  }, []);

  return { timeLeft, isRunning, startTimer, pauseTimer, resumeTimer, resetTimer };
};

export default useCustomTimer;
