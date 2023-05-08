import { Plus } from "phosphor-react";
import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.svg";

export function Task() {
  return (
    <div>
      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit" title="Criar">
          <span> Criar </span>
          <Plus className={styles.plusIcon} size={16} />
        </button>
      </form>
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
        <div className={styles.emptyTaskList}>
          <img src={Clipboard} />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </div>
      </div>
    </div>
  );
}
