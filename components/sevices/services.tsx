"use client";

import Heading from "@/components/heading";
import Service from "./service";
import { classStyle } from "@/lib/helpers";
import useSwipe from "@/hooks/useSwipe";
import cn from "classnames";
import styles from "./services.module.scss";

const c = classStyle(styles);

export default function Services() {
  const {
    containerRef,
    traveled,
    index,
    isTransiting,
    mouseDownHandler,
    mouseMoveHandler,
    mouseUpHandler,
  } = useSwipe();

  return (
    <div className={c("services")}>
      <Heading>services</Heading>
      <div className={c("services-container")}>
        <div
          ref={containerRef}
          onMouseDown={mouseDownHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseUpHandler}
          className={c("services-service-container")}
        >
          {Array(10)
            .fill("")
            .map((a, idx) => (
              <div
                className={c(
                  `services-service ${cn({ transit: isTransiting })}`
                )}
                style={{ transform: `translateX(${traveled}px)` }}
              >
                <Service num={idx} />
              </div>
            ))}
        </div>
        <div className={c("services-indicators")}>
          {Array(10)
            .fill("")
            .map((a, idx) => (
              <span
                className={c(
                  `services-indicators-single ${cn({ active: index === idx })}`
                )}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
}
