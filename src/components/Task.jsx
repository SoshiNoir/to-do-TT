import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

import check from "../assets/check.svg";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.check}>
        {" "}
        <img src={check} />
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        corporis molestiae magnam consequatur explicabo earum expedita porro,
      </p>

      <button className={styles.delete}>
        <Trash />
      </button>
    </div>
  );
}
