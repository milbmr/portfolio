"use client";

import Link from "next/link";
import useTyping from "hooks/useTyping";
import { classStyle } from "lib/helpers";
import { FaChevronDown } from "react-icons/fa";
import styles from "./hero.module.scss";

const fullText = [
  "Im a frontend web developer",
  "I build responsive optimized web apps",
  "I implement designs",
];

const c = classStyle(styles);

export default function Hero() {
  const { text } = useTyping(fullText, 150, 30);

  return (
    <div className={c("hero")}>
      <div className="container">
        <div className={c("conta")}>
          <h1 className={c("name")}>Miloud Boumachrouk</h1>
          <h2 className={c("typed")}>
            <span className={c("typed-code")}>
              &lt;<i>code</i>&gt;&nbsp;&nbsp;
            </span>
            <p className={c("typed-text")}>
              <span>{text}</span>
            </p>
            <span className={c("typed-code")}>
              &nbsp;&nbsp;&lt;/<i>code</i>&gt;
            </span>
          </h2>
        </div>
        <div className={c("icon-container")}>
          <a href="#about">
            <FaChevronDown className={c("icon")} />
          </a>
        </div>
      </div>
    </div>
  );
}
