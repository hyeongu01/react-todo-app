import { type JSX } from 'react';
import styles from './Filter.module.css';
import { useTodoList } from '../contexts/TodoContext';

function Filter(): JSX.Element {
  const { filter, updateFilter } = useTodoList();

  function handleUpdateFilter(e: React.MouseEvent<HTMLButtonElement>) {
    updateFilter(e.currentTarget.name);
  }

  return (
    <div className={styles.filters}>
      <button
        name={'all'}
        className={filter === 'all' ? styles.active : ''}
        onClick={handleUpdateFilter}
      >
        전체
      </button>
      <button
        name={'process'}
        className={filter === 'process' ? styles.active : ''}
        onClick={handleUpdateFilter}
      >
        미완료
      </button>
      <button
        name={'done'}
        className={filter === 'done' ? styles.active : ''}
        onClick={handleUpdateFilter}
      >
        완료
      </button>
    </div>
  );
}
export default Filter;
