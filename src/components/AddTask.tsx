import styles from './AddTask.module.css';
import { type JSX, useState } from 'react';
import { useTodoList } from '../contexts/TodoContext';

function AddTask(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [text, setText] = useState('');
  const { addTodo } = useTodoList();

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleAddButton() {
    addTodo({ id: currentIndex, title: text, isDone: false });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className={styles.input_group}>
      <input
        type="text"
        placeholder="할 일을 입력하세요..."
        onChange={handleTextChange}
      />
      <button className={styles.add_btn} onClick={handleAddButton}>
        추가
      </button>
    </div>
  );
}

export default AddTask;
