import { useState, useRef, useEffect, MouseEvent } from "react";
import { getTraveledDistance, getRatio, getEvent } from "lib/helpers";
import classNames from "classnames";

export default function useSwipe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  const index = useRef<number>(0);
  const [traveled, setTraveled] = useState(0);
  const [moved, setMoved] = useState(0);
  const [finish, setFinish] = useState(0);
  const [isTransiting, setIstransiting] = useState(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  useEffect(() => {
    const containerLength = containerRef.current!.childNodes.length;
    const width =
      (containerRef.current?.firstChild as HTMLElement).clientWidth ?? 0;
    let timeOut: ReturnType<typeof setTimeout>;

    if (!isSwiping) {
      timeOut = setTimeout(() => {
        setIstransiting(true);

        if (containerLength - 1 !== index.current) {
          index.current = Math.min(containerLength - 1, index.current + 1);
        } else {
          index.current = 0;
        }

        setTraveled(index.current * -width);
      }, 3000);
    }

    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [traveled]);

  const downHandler = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    startX.current = getEvent(event).clientX;
    setIsSwiping(true);
  };

  const moveHandler = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isSwiping) return;
    currentX.current = getEvent(event).clientX;
    const distance = getTraveledDistance(startX.current, currentX.current);
    const travelDistance = finish + distance;

    setMoved(distance);
    setTraveled(travelDistance);
    setIstransiting(false);
  };

  const upHandler = (event: React.MouseEvent | React.TouchEvent) => {
    setIsSwiping(false);
    const containerLength = containerRef.current!.childNodes.length;
    const width =
      (containerRef.current?.firstChild as HTMLElement).clientWidth ?? 0;
    const threshold = width / 4;

    if (Math.abs(moved) > threshold) {
      setIstransiting(true);
      if (moved < 0) {
        index.current = Math.min(containerLength - 1, index.current + 1);
      } else {
        index.current = Math.max(0, index.current - 1);
      }
    }

    setMoved(0);
    setTraveled(index.current * -width);
    setFinish(index.current * -width);
  };

  return {
    containerRef,
    traveled,
    index: index.current,
    isTransiting,
    downHandler,
    moveHandler,
    upHandler,
  };
}
