import { useEffect } from "react";
import styles from "./TaskCard.module.css";
import { Trash } from "phosphor-react";
import { TaskType } from "./TaskContainer";

interface TaskCardProps {
  taskList: TaskType[];
}

export function TaskCard({ taskList }: TaskCardProps) {
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);
  return (
    <>
      {taskList.map((taskItem) => {
        if (taskItem) {
          return (
            <div key={taskItem.id} className={styles.task}>
              <span>
                <span></span>
                <input type="checkbox" />
              </span>

              <p className={styles.checkedText}>
                {taskItem.task}
                {/* {task.map((item, index) => {
  
            return <p>{item}</p>
          })} */}
              </p>
              {/* <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p> */}
              <div className={styles.trashIcon}>
                <Trash size={"1.5rem"} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
