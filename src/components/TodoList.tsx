import { type JSX } from 'react';
import { useTodoList } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList(): JSX.Element {
  const { getFilteredList } = useTodoList();
  const todoList = getFilteredList();

  if (todoList.length === 0) return <p>Task가 없습니다.</p>;
  return (
    <ul className={styles['todo-list']}>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem id={todo.id} title={todo.title} isDone={todo.isDone} />
          </li>
        );
      })}
    </ul>
  );
}
export default TodoList;
