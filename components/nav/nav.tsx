"use client";

import { useState } from "react";
import useStiky from "@/hooks/useStiky";
import cn from "classnames";
import { classStyle } from "@/lib/helpers";
import useScroll from "@/hooks/useScroll";
import n from "classnames";
import styles from "./nav.module.scss";

const c = classStyle(styles);
const links = ["home", "about", "services"];

export default function Nav() {
  const [active, setActive] = useState("home");
  const { ref, isStiky } = useStiky();
  useScroll(links, (link) => {
    setActive(link);
  });

  const activeClassHandler = (link: string) => {
    setActive(link);
  };

  return (
    <div ref={ref} className={c(`nav ${cn({ stiky: isStiky })}`)}>
      <ul className={c("nav--list")}>
        {links.map((link) => (
          <li
            key={link}
            onClick={() => activeClassHandler(link)}
            className={c(`nav--item ${n({ active: link === active })}`)}
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
