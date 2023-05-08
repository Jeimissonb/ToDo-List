import { Header } from "./components/Header";
import { Task } from "./components/Task";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.taskCentral}>
        <Task />
      </div>
    </>
  );
}

export default App;
