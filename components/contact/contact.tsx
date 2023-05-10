import Heading from "@/components/heading";
import { classStyle } from "@/lib/helpers";
import cn from "classnames";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./contact.module.scss";

const c = classStyle(styles);

export default function Contact() {
  return (
    <section id="contact" className={c("contact")}>
      <Heading>Contact me</Heading>
      <div className={c("contact-contacts")}>
        <div className={c("contact-social")}>
          <div className={c("contact-icon-container")}>
            <HiOutlineMail className={c("contact-icon")} />
          </div>
          <p className={c("contact-text")}>miloamg@gmail.com</p>
        </div>

        <div className={c("contact-social")}>
          <div className={c("contact-icon-container")}>
            <FaPhoneAlt className={c("contact-icon")} />
          </div>
          <p className={c("contact-text")}>+213-675-10-22-12</p>
        </div>

        <div className={c("contact-social")}>
          <a
            href="https://github.com/milbmr"
            target="_blank"
            rel="noopener noreferrer"
            className={c("contact-link")}
          >
            <div className={c("contact-icon-container")}>
              <FaGithub className={c("contact-icon")} />
            </div>
            <p className={c("contact-text")}>Github</p>
          </a>
        </div>

        <div className={c("contact-social")}>
          <a
            href="https://www.linkedin.com/in/miloud-boumachrouk-8bb8791b3/"
            target="_blank"
            rel="noopener noreferrer"
            className={c("contact-link")}
          >
            <div className={c("contact-icon-container")}>
              <FaLinkedin className={c("contact-icon")} />
            </div>
            <p className={c("contact-text")}>Linkedin</p>
          </a>
        </div>
      </div>
    </section>
  );
}
