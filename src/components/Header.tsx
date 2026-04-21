import { type JSX } from "react";
import styles from "./Header.module.css";

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <h1>📝 할 일 목록</h1>
      <div className="toggle"></div>
    </div>
  );
}
export default Header;
