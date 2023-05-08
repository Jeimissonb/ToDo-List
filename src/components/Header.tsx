import rocketLogo from "../assets/rocket-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocketLogo} alt="Logo da rocketseat" />

      <strong>todo</strong>
    </div>
  );
}
