import { useRef, useCallback } from "react";

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param fn The function to be called
 * @param wait Wait period in ms before function is called
 * @returns A memoized function that is debounced
 */
export const useDebounce = (fn: (...args: any[]) => void, wait: number) => {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        fn(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [fn, wait]
  );
};
