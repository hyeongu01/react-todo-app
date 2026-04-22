import { type JSX } from 'react';
import { useTodoList } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const MessageWhenEmpty = {
  all: ['아직 할 일이 없어요', '오늘 하고싶은 일을 적어보세요 ✍️'],
  process: ['할 일을 모두 마쳤어요!', '오늘도 수고했어요 🎉'],
  done: ['아직 완료한 일이 없어요..', '할 일을 끝내면 여기서 확인할 수 있어요'],
};

function TodoList(): JSX.Element {
  const { filteredList, filter } = useTodoList();

  if (filteredList.length === 0)
    return (
      <div className={styles['empty-set']}>
        📋
        <p className={styles['main-text']}>{MessageWhenEmpty[filter][0]}</p>
        <p className={styles['sub-text']}>{MessageWhenEmpty[filter][1]}</p>
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
