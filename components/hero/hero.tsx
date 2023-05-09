"use client";

import Link from "next/link";
import useTyping from "hooks/useTyping";
import { classStyle } from "lib/helpers";
import {FaChevronDown} from "react-icons/fa";
import styles from "./hero.module.scss";

const fullText = [
  "im a dev",
  "i love code",
  "im frondend expert",
  "im awsome  ",
];

const c = classStyle(styles);

export default function Hero() {
  const { text } = useTyping(fullText, 150, 30);

  return (
    <div className={c("hero")}>
      <div className={c("conta")}>
        <h1 className={c("name")}>Miloud Boumachrouk</h1>
        <h2 className={c("typed")}>
          <span className={c("typed-code")}>
            &lt;<i>code</i>&gt;
          </span>
          <p className={c("typed-text")}>
            <span>{text}</span>
          </p>
          <span className={c("typed-code")}>
            &lt;/<i>code</i>&gt;
          </span>
        </h2>
      </div>
      <div className={c('icon-container')}>
        <a href="#about"><FaChevronDown className={c('icon')} /></a>
      </div>
    </div>
  );
}
