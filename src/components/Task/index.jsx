import { Trash } from "phosphor-react";
import React from "react";
import styles from "./styles.module.css";

import check from "../../assets/check.svg";
import uncheck from "../../assets/uncheck.svg";

export function Task({
  id,
  content,
  onHandleDeleteTask,
  done,
  onHandleToggleDoneTask,
}) {
  function handleDeleteTask() {
    onHandleDeleteTask(id);
  }

  function handleToggleSelect() {
    onHandleToggleDoneTask(id);
  }

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.task}>
        <button onClick={handleToggleSelect} className={styles.check}>
          {" "}
          {done ? <img src={check} /> : <img src={uncheck} />}
        </button>
        {done ? <strike>{content}</strike> : <p>{content}</p>}
      </div>

      <button
        onClick={handleDeleteTask}
        className={styles.delete}
        title="Deletar comentário"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
