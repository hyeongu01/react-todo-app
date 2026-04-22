import { type JSX } from 'react';
import styles from './Footer.module.css';
import { useTodoList } from '../contexts/TodoContext';

function Footer(): JSX.Element {
  const { todoList } = useTodoList();
  const doneList = todoList.filter((todo) => todo.isDone);
  return (
    <div className={styles.footer}>
      <p>{`총 ${todoList.length}개 중 ${doneList.length}개 완료`}</p>
      <button className={styles.clear}>완료 항목 삭제</button>
    </div>
  );
}
export default Footer;
