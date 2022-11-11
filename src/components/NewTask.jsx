import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./NewTask.module.css";

export function NewTask({ onHandleCreateTask }) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();

    const newTaskText = event.target.task.value;
    onHandleCreateTask({ id: v4(), content: newTaskText, done: false });
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <div className={styles.newTask}>
      <form onSubmit={handleCreateNewTask}>
        <input
          name="task"
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
          onInvalid={handleNewTaskInvalid}
          placeholder="Adicione uma nova"
        />
        <button type="submit" className={styles.newTaskButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
