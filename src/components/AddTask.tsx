import styles from './AddTask.module.css';
import { type JSX, useState, useRef } from 'react';
import { useTodoList } from '../contexts/TodoContext';

function AddTask(): JSX.Element {
  const [isError, setError] = useState(false);
  const [text, setText] = useState('');
  const { addTodo } = useTodoList();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleAddButton() {
    if (!text.trim()) {
      setError(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setError(false), 3000);
      return;
    }
    addTodo({ id: Date.now(), title: text, isDone: false });
    setText('');
  }

  return (
    <div className={styles.input_group}>
      <input
        type="text"
        placeholder={isError ? '할 일을 입력해주세요.' : 'ed) 산책하기'}
        onChange={handleTextChange}
        value={text}
        className={isError ? styles.error : ''}
      />
      <button className={styles.add_btn} onClick={handleAddButton}>
        추가
      </button>
    </div>
  );
}

export default AddTask;
