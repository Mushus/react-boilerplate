import { useState, useCallback } from 'react';
import { createContainer } from 'unstated-next';

const useCounter = (): {
  count: number;
  increment: () => void;
  decrement: () => void;
} => {
  const [count, setCount] = useState(0);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const increment = useCallback(() => setCount(c => c + 1), []);
  return {
    count,
    decrement,
    increment,
  };
};

export default createContainer(useCounter);
