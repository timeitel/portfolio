import { useRef, useCallback } from "react";

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param fn The function to be called
 * @param wait Wait period in ms before function is called
 * @returns A memoized function that is debounced
 */
export const useDebounce = (
  fn: (...args: any[]) => void,
  wait: number,
  immediate = false
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const immediateRef = useRef(immediate);

  return useCallback(
    (...args) => {
      // fire once immediately
      if (immediateRef.current) {
        fn(...args);
        immediateRef.current = false;
      }

      const debouncedFn = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // reset to fire immediately on next call
        if (immediate) {
          immediateRef.current = true;
        }

        fn(...args);
      };

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(debouncedFn, wait);
    },
    [fn, wait]
  );
};
