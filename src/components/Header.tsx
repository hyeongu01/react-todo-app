import { type JSX } from 'react';
import styles from './Header.module.css';
import { useTheme } from '../contexts/ThemeContext';

function Header(): JSX.Element {
  const { toggleTheme } = useTheme();
  return (
    <div className={styles.header}>
      <h1>📝 할 일 목록</h1>

      <button onClick={toggleTheme}>테마</button>
    </div>
  );
}
export default Header;
