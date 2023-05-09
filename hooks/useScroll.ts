import { useState, useEffect, useRef } from "react";

export default function useScroll(links: string[], callback: (link: string) => void) {
  const ref = useRef(0);

  useEffect(() => {
    const scrollHandler = () => {
      const viewHeight = window.screen.height - 200;
      const scrollY = window.pageYOffset;

      if (
        scrollY > viewHeight * (ref.current + 1) &&
        scrollY <= viewHeight * (ref.current + 2)
      ) {
        ref.current = Math.min(links.length - 1, ref.current + 1);
      } else if (scrollY <= (viewHeight - 200) * ref.current) {
        ref.current = Math.max(0, ref.current - 1);
      }

      callback(links[ref.current])
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
}
