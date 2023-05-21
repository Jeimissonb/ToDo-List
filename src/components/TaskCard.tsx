import styles from "./TaskCard.module.css";
import { Trash } from "phosphor-react";
import { TaskType } from "./TaskContainer";
import { useState, ChangeEvent } from "react";

interface TaskCardProps {
  taskList: TaskType[];
  onDeleteTask: (id: string | undefined) => void;
}

export function TaskCard({ taskList, onDeleteTask }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      {taskList.map((taskItem) => {
        if (taskItem) {
          return (
            <div key={taskItem.id} className={styles.task}>
              <span>
                <span></span>
                <input type="checkbox" onChange={handleChangeCheckbox} />
              </span>
              {isChecked ? (
                <p className={styles.checkedText}>{taskItem.task}</p>
              ) : (
                <p>{taskItem.task}</p>
              )}

              <div className={styles.trashIcon}>
                <Trash
                  size={"1.5rem"}
                  onClick={() => onDeleteTask(taskItem?.id)}
                />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
