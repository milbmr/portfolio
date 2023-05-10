"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heading from "components/heading";
import cn from "classnames";
import useIntersction from "@/hooks/useIntersection";
import { classStyle } from "@/lib/helpers";
import { BsChevronCompactRight } from "react-icons/bs";
import styles from "./about.module.scss";

const about = [
  { Name: "Miloud" },
  { "Last name": "Boumachrouk" },
  { Birthday: "28/07/1995" },
  { Age: 27 },
  { Email: "miloamg@gmail.com" },
  { Phone: "+213-675-10-22-12" },
  { Address: "Algeria" },
  { Freelence: "Available" },
];

const c = classStyle(styles);

export default function About() {
  const { ref, isIntersecting } = useIntersction();

  return (
    <section ref={ref} id="about" className={c("about")}>
      <Heading>about me</Heading>
      <div className={c("about-about")}>
        <div className={c(`about-photo ${cn({ active: isIntersecting })}`)}>
          <div className={c("about-photo-container")}>
            <Image
              src="/photo.jpg"
              alt="profile"
              className={c("about-photo-pic")}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={c(`about-section ${cn({ active: isIntersecting })}`)}>
          <div className={c("about-info")}>
            {about.map((a) =>
              Object.entries(a).map(([key, value]) => (
                <div key={key} className={c("about-field")}>
                  <BsChevronCompactRight className={c("about-icon")} />{" "}
                  <p className={c("about-personal")}>
                    <span
                      className={c("about-personal--key")}
                    >{`${key}:`}</span>
                    <span className={c("about-personal--value")}>{value}</span>
                  </p>
                </div>
              ))
            )}
          </div>
          <div className={c("about-link")}>
            <a
              href="/miloud.pdf"
              download="resume"
              className={c("about-download")}
            >
              Download resume
            </a>
          </div>
          <div className={c("about-description")}>
            <p className={c("about-description-text")}>
              Frontend developer with expertise in HTML, CSS, JavaScript, and
              popular frameworks such as React. Passionate about user-friendly
              web applications with a focus on performance optimization and
              accessibility. Strong problem-solving abilities and collaborative
              mindset for delivering high-quality code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
