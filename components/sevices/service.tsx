import { classStyle } from "@/lib/helpers";
import styles from "./service.module.scss";
import { DataType } from "@/lib/data/services-data";

const c = classStyle(styles);

export default function Service({ title, description, Icon }: DataType) {
  return (
    <div className={c("service")}>
      <div className={c("service-container")}>
        <div className={c("service-icon-container")}>
          <Icon className={c("service-icon")} />
        </div>
        <h3 className={c("service-title")}>{title}</h3>
        <p className={c("service-text")}>{description}</p>
      </div>
    </div>
  );
}
