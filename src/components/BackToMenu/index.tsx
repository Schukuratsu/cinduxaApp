import { Link } from "react-router-dom";
import styles from "./BackToMenu.module.css";

export function BackToMenu() {
  return (
    <Link to="/" className={styles.container}>
      <span>←</span> Voltar
    </Link>
  );
}
