import RockedLogo from "../assets/RocketLogo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={RockedLogo} alt="Logo da rocketseat" />

      <strong>todo</strong>
    </div>
  );
}
