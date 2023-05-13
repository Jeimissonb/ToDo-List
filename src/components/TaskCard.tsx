import styles from "./TaskCard.module.css";
import { Trash } from "phosphor-react";

export function TaskCard() {
  return (
    <div className={styles.task}>
      <span>
        <span></span>
        <input type="checkbox" />
      </span>
      <p className={styles.checkedText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      {/* <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p> */}
      <div>
        <Trash size={"1.5rem"}/>
      </div>
    </div>
  );
}
