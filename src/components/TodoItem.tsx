import { type JSX } from 'react';
import styles from './TodoItem.module.css';
import type { TodoType } from '../types/Todo.types';
import { useTodoList } from '../contexts/TodoContext';

type TodoItemProps = TodoType;

function TodoItem({ id, title, isDone }: TodoItemProps): JSX.Element {
  const { toggleTodo } = useTodoList();

  return (
    <div className={styles.item}>
      <input
        className={styles.checkbox}
        type={'checkbox'}
        checked={isDone}
        onChange={() => toggleTodo(id)}
      />
      <span className={styles.title}>{title}</span>
      <button className={styles.actions}>✏️</button>
      <button className={styles.actions}>🗑️</button>
    </div>
  );
}

export default TodoItem;
