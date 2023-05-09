import { useState, useRef, useEffect } from "react";

type IntersectionOptions = {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
};

export default function useIntersction(options?: IntersectionOptions) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!isIntersecting && entry.isIntersecting) setIsIntersecting(true);
    });

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, []);

  return { ref, isIntersecting };
}
