import styles from "./TaskContainer.module.css";
import { TaskCard } from "./TaskCard";

export function TaskContainer() {
  return (
    <div>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksInfo}>
          <div className={styles.createdTasksInfo}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.doneTasksInfo}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
        {/* <div className={styles.emptyTaskList}>
          <img src={Clipboard} />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </div> */}
        <div className={styles.taskList}>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
}
