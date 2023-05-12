import { Plus } from "phosphor-react";
import styles from "./TaskForm.module.css";

export function TaskForm() {
  return (
    <form className={styles.taskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit" title="Criar">
        <span> Criar </span>
        <Plus className={styles.plusIcon} size={16} />
      </button>
    </form>
  );
}
