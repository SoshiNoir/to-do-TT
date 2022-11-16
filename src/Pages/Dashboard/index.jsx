import { ClipboardText } from "phosphor-react";
import React, { useState, useCallback } from "react";
import { v4 } from "uuid";
import styles from "./styles.module.css";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";

export function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: v4(), content: "Terminar aplicação", done: false },
  ]);

  const tasksDoneNumber = useCallback(() => {
    return tasks.filter((task) => task.done === true).length;
  }, [tasks]);
  
  function handleCreateTask(newTask) {
    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleDeleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleToggleDoneTask(id) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task?.done };
      }
      return task;
    });

    setTasks(newTask);
  }

  return (
    <div className="wrapper">
      <NewTask onHandleCreateTask={handleCreateTask} />
      <div>
        <article className={styles.article}>
          <div className={styles.info}>
            <div>
              <p className={styles.criadas}>Tarefa Criadas</p>
              <div className={styles.counter}>
                <p>{tasks.length}</p>
              </div>
            </div>
            <div>
              <p className={styles.concluidas}>Concluídas</p>
              <div className={styles.counter}>
                <p>
                  {tasksDoneNumber()} de {tasks.length}
                </p>
              </div>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.empty}>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <div className={styles.task}>
              {tasks.map((task) => {
                return (
                  <Task
                    id={task.id}
                    key={task.id}
                    done={task.done}
                    content={task.content}
                    onHandleDeleteTask={handleDeleteTask}
                    onHandleToggleDoneTask={handleToggleDoneTask}
                  />
                );
              })}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
