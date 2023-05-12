import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import styles from "./App.module.css";
import "./global.css";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.taskCentralContainer}>
        <TaskForm />
        <div className={styles.taskContent}>
          <TaskContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
