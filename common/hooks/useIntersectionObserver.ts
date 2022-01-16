import { MutableRefObject, useEffect, useState } from "react";

interface Args {
  ref: MutableRefObject<undefined>;
  threshold?: number;
  root?: null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  ref,
  freezeOnceVisible = true,
  root = null,
  rootMargin = "0%",
  threshold = 0,
}: Args) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry: IntersectionObserverCallback = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin, frozen]);

  return entry;
}
