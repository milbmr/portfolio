import { classStyle } from "@/lib/helpers";
import styles from "./service.module.scss";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

const c = classStyle(styles);

export default function Service({num}:{num: number}) {
  return (
    <div className={c("service")}>
      <div className={c("service-container")}>
        <div className={c("service-icon-container")}>
          <BsGlobeAsiaAustralia className={c("service-icon")} />
        </div>
        <h3 className={c("service-title")}>Modify sites{num}</h3>
        <p className={c("service-text")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        </p>
      </div>
    </div>
  );
}
