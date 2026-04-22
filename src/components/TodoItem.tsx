import { useState, type JSX } from 'react';
import styles from './TodoItem.module.css';
import type { TodoType } from '../types/Todo.types';
import { useTodoList } from '../contexts/TodoContext';
import EditModal from './EditModal';

type TodoItemProps = TodoType;

function TodoItem({ id, title, isDone }: TodoItemProps): JSX.Element {
  const { toggleTodo, deleteTodo } = useTodoList();
  const [isEditing, setIsEditing] = useState(false);

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
        <button className={styles.edit} onClick={() => setIsEditing(true)}>
          ✎
        </button>
        <button className={styles.delete} onClick={() => deleteTodo(id)}>
          ✕
        </button>
      </div>
      <EditModal
        id={id}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
      />
    </div>
  );
}

export default TodoItem;
