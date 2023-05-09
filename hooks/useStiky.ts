import { useState, useEffect, useRef } from "react";

export default function useStiky() {
  const [isStiky, setIsStiky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = ref.current?.clientHeight!;

    const handler = () => {
      setIsStiky(window.pageYOffset >= scroll);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { ref, isStiky };
}
