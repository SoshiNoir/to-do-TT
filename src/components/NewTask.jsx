import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <form>
        <textarea placeholder="Adicione uma nova" />
        <button className={styles.newTaskButton}>Criar</button>
      </form>
    </div>
  );
}
