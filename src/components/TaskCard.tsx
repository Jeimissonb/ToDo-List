import styles from "./TaskCard.module.css";
import { Trash } from "phosphor-react";
import { TaskType } from "./TaskContainer";
import { useState, ChangeEvent } from "react";

interface TaskCardProps {
  taskItem: TaskType;
  onDeleteTask: (id: string | undefined, isChecked: boolean | undefined) => void;
  onCheckTask: (id: string, isChecked: boolean) => void;
}

export function TaskCard({
  taskItem,
  onDeleteTask,
  onCheckTask,
}: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckbox(
    event: ChangeEvent<HTMLInputElement>,
    id: string | undefined
  ) {
    setIsChecked(event.target.checked);
    if (id && event.target.checked) {
      onCheckTask(id, true);
    } else if (id && !event.target.checked) {
      onCheckTask(id, false);
    }
  }

  return (
    <>
      {taskItem && (
        <div key={taskItem.id} className={styles.task}>
          <span>
            <span></span>
            <input
              type="checkbox"
              onChange={(event) => handleChangeCheckbox(event, taskItem.id)}
            />
          </span>
          <p className={isChecked ? styles.checkedText : ""}>{taskItem.task}</p>

          <div className={styles.trashIcon}>
            <Trash size={"1.5rem"} onClick={() => onDeleteTask(taskItem?.id, taskItem?.isChecked)} />
          </div>
        </div>
      )}
    </>
  );
}
