import { useEffect, useRef, useState } from 'react';
import Timer from 'easytimer.js';

const useCustomTimer = () => {
  const [timeLeft, setTimeLeft] = useState('00:00:00');
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Function to initialize the timer with a given time
  const initializeTimer = (minutes = 1) => {
    if (timerRef.current) {
      timerRef.current.stop(); // Stop any running timer
    }
    timerRef.current = new Timer();

    timerRef.current.start({ countdown: true, startValues: { minutes } });

    // Update the time display every second
    timerRef.current.addEventListener('secondsUpdated', () => {
      setTimeLeft(timerRef.current.getTimeValues().toString());
    });

    // When the timer reaches zero, start with a new value
    timerRef.current.addEventListener('targetAchieved', () => {
      initializeTimer(2);
    });

    setIsRunning(true);
  };

  const startTimer = () => {
    initializeTimer(1);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      timerRef.current.pause();
      setIsRunning(false);
    }
  };

  const resumeTimer = () => {
    if (timerRef.current) {
      timerRef.current.resume();
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    initializeTimer(1);
  };

  // Clean up the timer on component unmount
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
