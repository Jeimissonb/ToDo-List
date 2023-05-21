import { Plus } from "phosphor-react";
import styles from "./TaskForm.module.css";
import { useState, ChangeEvent, useEffect } from "react";
import { TaskContainer, TaskType } from "./TaskContainer";
import { v4 as uuidv4 } from 'uuid';


export function TaskForm() {
  const [textOfTask, setTextOfTask] = useState("");
  const [newTextOfTask, setNewTextOfTask] = useState<TaskType>();
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    inputError && alert(inputError);
    return () => {
      setInputError("");
    }
  }, [inputError])
  

  function handleOnChangeTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setTextOfTask(event.target.value);
    setInputError("");
  }

  function handleOnSubmitTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (textOfTask.trim() === "") {
      setInputError("Preencha o campo!");
    } else {

      const taskItem: TaskType = {
        id: uuidv4(),
        task: textOfTask,
        isChecked: false
      };

      setNewTextOfTask(taskItem);
      setTextOfTask("");
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmitTask} className={styles.taskForm}>
        <input
          type="text"
          placeholder={"Adicione uma nova tarefa"}
          value={textOfTask}
          onChange={handleOnChangeTaskValue}
        />
        <button type="submit" title="Criar" value={textOfTask}>
          <span> Criar </span>
          <Plus className={styles.plusIcon} size={"1rem"} />
        </button>
      </form>
      <div className={styles.taskContent}>
        <TaskContainer task={newTextOfTask?.task} id={newTextOfTask?.id} isChecked={newTextOfTask?.isChecked}/>
      </div>
    </>
  );
}
