import { type JSX } from 'react';
import { useTodoList } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList(): JSX.Element {
  const { filteredList } = useTodoList();

  // TODO: 필터 상태마다 메세지 바꾸기
  if (filteredList.length === 0)
    return (
      <div className={styles['empty-set']}>
        📋
        <p className={styles['main-text']}>할 일이 없어요</p>
        <p className={styles['sub-text']}>새로운 할 일을 추가해 보세요!</p>
      </div>
    );

  return (
    <ul className={styles['todo-list']}>
      {filteredList.map((todo) => {
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
