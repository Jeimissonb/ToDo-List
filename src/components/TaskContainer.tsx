import styles from "./TaskContainer.module.css";
import { TaskCard } from "./TaskCard";
import { useEffect, useState } from "react";
import Clipboard from "../assets/Clipboard.svg";

export interface TaskType {
  id: string | undefined;
  task: string | undefined;
  isChecked: boolean | undefined;
}

export function TaskContainer({ task, id, isChecked }: TaskType) {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [taskItemChecked, setTaskItemChecked] = useState(0);

  useEffect(() => {
    if (task) {
      setTaskList((prevTaskList) => [...prevTaskList, { task, id, isChecked }]);
    }
  }, [task, id, setTaskList, isChecked]);

  function onDeleteTask(taskId: string | undefined, isChecked: boolean | undefined) {
    console.log(isChecked)
    if(taskId && isChecked === true) {
      setTaskItemChecked(taskItemChecked - 1);
    }
    setTaskList((prevTaskList) => [
      ...prevTaskList.filter(task => task.id !== taskId),
    ]);
  }

  function onCheckTask(taskId: string, isChecked: boolean) {
    setTaskList((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === taskId && isChecked) {
          setTaskItemChecked(taskItemChecked + 1);
          return { ...item, isChecked: true };
        } else if (item.id === taskId && !isChecked) {
          setTaskItemChecked(taskItemChecked - 1);
          return { ...item, isChecked: false };
        }
        return item;
      });
    });
  }

  return (
    <div>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksInfo}>
          <div className={styles.createdTasksInfo}>
            <strong>Tarefas criadas</strong>
            <span>{taskList.length}</span>
          </div>
          <div className={styles.doneTasksInfo}>
            <strong>Concluídas</strong>
            <span>{taskItemChecked}</span>
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
          {taskList.map((item) => {
            return (
              <TaskCard
                key={item.id}
                taskItem={item}
                onDeleteTask={onDeleteTask}
                onCheckTask={onCheckTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
