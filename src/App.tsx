import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.taskCentralContainer}>
        <TaskForm />

      </div>
    </div>
  );
}

export default App;
