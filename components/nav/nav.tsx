"use client";

import { useState } from "react";
import useStiky from "@/hooks/useStiky";
import cn from "classnames";
import { classStyle } from "@/lib/helpers";
import useScroll from "@/hooks/useScroll";
import n from "classnames";
import useViewport from "@/hooks/useViewport";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import styles from "./nav.module.scss";

const c = classStyle(styles);
const links = ["home", "about", "services", "contact"];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [show, setShow] = useState(false);
  const { ref, isStiky } = useStiky();
  useScroll(links, (link) => {
    setActive(link);
  });
  const viewport = useViewport();

  const isMobile = viewport <= 460;

  const activeClassHandler = (link: string) => {
    setActive(link);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      ref={ref}
      className={c(
        `nav ${cn({ stiky: isStiky, mobile: isMobile, "show-menu": show })}`
      )}
    >
      <ul className={c(`nav--list ${cn({ "mobile-list": isMobile })}`)}>
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
      {isMobile && (
        <div className={c(`nav--btn ${cn({ "show--btn": !show })}`)}>
          <button onClick={handleShow} className={c("nav--btn-btn")}>
            {show ? (
              <IoMdClose className={c("nav--btn-icon")} />
            ) : (
              <IoMdMenu className={c("nav--btn-icon")} />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
