import { MutableRefObject, useEffect, useState } from "react";

interface Args {
  threshold: number;
  root: null;
  rootMargin: string;
  freezeOnceVisible: boolean;
}

const defaultArgs: Args = {
  threshold: 0,
  freezeOnceVisible: true,
  rootMargin: "0%",
  root: null,
};

export function useIntersectionObserver(
  elementRef: MutableRefObject<undefined>,
  { threshold, root, rootMargin, freezeOnceVisible }: Args = defaultArgs
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry: IntersectionObserverCallback = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}
