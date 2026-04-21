import { type JSX } from 'react';
import styles from './TodoItem.module.css';
import type { TodoType } from '../types/Todo.types';
import { useTodoList } from '../contexts/TodoContext';

type TodoItemProps = TodoType;

function TodoItem({ id, title, isDone }: TodoItemProps): JSX.Element {
  const { toggleTodo } = useTodoList();

  return (
    <div className={styles.card}>
      <div
        className={isDone ? styles.checkbox_done : styles.checkbox}
        onClick={() => toggleTodo(id)}
      >
        {isDone ? '✓' : ''}
      </div>
      <span className={isDone ? styles.title_done : styles.title}>{title}</span>

      <div className={styles.actions}>
        <button className={styles.edit}>✎</button>
        <button className={styles.delete}>✕</button>
      </div>
    </div>
  );
}

export default TodoItem;
