import styles from "./TaskContainer.module.css";
import { TaskCard } from "./TaskCard";
import { useEffect, useState } from "react";
import Clipboard from "../assets/Clipboard.svg";

export interface TaskType {
  id: string | undefined;
  task: string | undefined;
}

export function TaskContainer({ task, id }: TaskType) {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  useEffect(() => {
    if (task) {
      setTaskList((prevTaskList) => [...prevTaskList, { task, id }]);
    }
  }, [task, id, setTaskList]);

  function onDeleteTask(taskId: string | undefined){
    setTaskList((prevTaskList) => [...prevTaskList.filter(task => task.id !== taskId)])
  }

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
        {taskList.length === 0 && (
          <div className={styles.emptyTaskList}>
            <img src={Clipboard} />
            <span>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </div>
        )}
        <div className={styles.taskList}>
          <TaskCard taskList={taskList} onDeleteTask={onDeleteTask}/>
        </div>
      </div>
    </div>
  );
}
