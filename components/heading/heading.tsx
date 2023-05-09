import React from "react";
import { classStyle } from "@/lib/helpers";
import styles from "./heading.module.scss";

const c = classStyle(styles);

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className={c("heading")}>
      <span className={c("heading-back")}>{children}</span>
      <h1 className={c("heading-main")}>{children}</h1>
    </div>
  );
}
