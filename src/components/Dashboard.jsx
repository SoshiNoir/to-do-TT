import styles from "./Dashboard.module.css";
import { Task } from "./Task";

export function Dashboard() {
  return (
    <div>
      <article className={styles.article}>
        <div className={styles.info}>
          <div>
            <p className={styles.criadas}>Tarefa Criadas</p>
            <div className={styles.counter}>
              <p>5</p>
            </div>
          </div>
          <div>
            <p className={styles.concluidas}>Concluídas</p>
            <div className={styles.counter}>
              <p>2 de 5</p>
            </div>
          </div>
        </div>
        <div className={styles.task}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </article>
    </div>
  );
}
