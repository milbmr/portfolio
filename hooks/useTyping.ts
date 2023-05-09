import { useState, useEffect, useRef } from "react";

export default function useTping(
  textArr: string[],
  typePeriod: number,
  deletePeriod: number
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const string = useRef(0);

  useEffect(() => {
    const loopNum = string.current;

    let timeout: any;

    if (loopNum < textArr.length) {
      timeout = setTimeout(
        () => {
          const subText = textArr[loopNum].substring(
            0,
            index + (isTyping ? 1 : -1)
          );
          setText(subText);
          setIndex(index + (isTyping ? 1 : -1));
        },
        isTyping ? typePeriod : deletePeriod
      );

      if (index === textArr[loopNum].length && loopNum < textArr.length - 1) {
        setIsTyping(false);
      } else if (
        index === textArr[loopNum].length &&
        loopNum === textArr.length - 1
      ) {
        string.current++;
      }

      if (text.length === 0 && !isTyping) {
        setIsTyping(true);
        string.current++;
      }
    }

    return () => clearTimeout(timeout);
  }, [text, index]);

  return { text };
}
