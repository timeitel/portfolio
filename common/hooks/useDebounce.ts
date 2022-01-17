import { useEffect, useState } from "react";

export function useDebounce<T>(fn: T, delay: number = 300): T {
  const [debouncedFn, setDebouncedFn] = useState<T>(fn);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedFn(fn), delay);

    return () => {
      clearTimeout(id);
    };
  }, [fn, delay]);

  return debouncedFn;
}
