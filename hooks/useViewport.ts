import { useEffect, useState } from "react";

const viewport = () => {
  const [isViewport, setIsViewport] = useState(false);

  useEffect(() => {
    setIsViewport(true);
  }, []);

  return { isViewport };
};

export default function useViewport() {
  const [media, setMedia] = useState<number>(0);
  const { isViewport } = viewport();

  useEffect(() => {
    const handleView = () => setMedia(isViewport ? window.innerWidth : 0);
    handleView();

    window.addEventListener("resize", handleView);
    return () => window.removeEventListener("resize", handleView);
  }, [isViewport]);

  return media;
}
