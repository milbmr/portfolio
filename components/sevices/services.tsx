"use client";

import Heading from "@/components/heading";
import Service from "./service";
import { classStyle } from "@/lib/helpers";
import useSwipe from "@/hooks/useSwipe";
import useIntersction from "@/hooks/useIntersection";
import { data } from "@/lib/data/services-data";
import cn from "classnames";
import styles from "./services.module.scss";

const c = classStyle(styles);

export default function Services() {
  const {
    containerRef,
    traveled,
    index,
    isTransiting,
    downHandler,
    moveHandler,
    upHandler,
  } = useSwipe();
  const { ref, isIntersecting } = useIntersction();

  return (
    <section id="services" ref={ref} className={c("services")}>
      <Heading>my services</Heading>
      <div
        className={c(`services-container ${cn({ animation: isIntersecting })}`)}
      >
        <div
          ref={containerRef}
          onMouseDown={downHandler}
          onTouchStart={downHandler}
          onMouseMove={moveHandler}
          onTouchMove={moveHandler}
          onMouseUp={upHandler}
          onTouchEnd={upHandler}
          className={c("services-service-container")}
        >
          {data.map((d, idx) => (
            <div
              key={d.title}
              className={c(`services-service ${cn({ transit: isTransiting })}`)}
              style={{ transform: `translateX(${traveled}px)` }}
            >
              <Service {...d} />
            </div>
          ))}
        </div>
        <div className={c("services-indicators")}>
          {Array(data.length)
            .fill("")
            .map((a, idx) => (
              <span
                key={idx}
                className={c(
                  `services-indicators-single ${cn({ active: index === idx })}`
                )}
              ></span>
            ))}
        </div>
      </div>
    </section>
  );
}
