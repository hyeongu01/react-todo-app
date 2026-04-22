import { useEffect, useState, type JSX, useRef, useCallback } from 'react';
import Portal from './Portal';
import { useTodoList } from '../contexts/TodoContext';
import styles from './EditModal.module.css';

type EditModalProps = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
};

function EditModal({
  id,
  isOpen,
  onClose,
}: EditModalProps): JSX.Element | null {
  const { todoList, updateTodo } = useTodoList();
  const todo = todoList.find((todo) => todo.id === id);
  const [text, setText] = useState<string | undefined>(todo?.title);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const handleSaveBtn = useCallback(() => {
    if (!todo) return;
    updateTodo({ ...todo, title: text! });
    onClose();
  }, [updateTodo, onClose, text, todo]);

  useEffect(() => {
    if (!isOpen) return;

    const id = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) =>
      e.key === 'Enter' && handleSaveBtn();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, handleSaveBtn]);

  if (!isOpen) return null;
  if (text === undefined) {
    onClose();
    return null;
  }

  return (
    <Portal>
      <div className={styles['modal-overlay']} onClick={onClose}>
        <div
          className={styles['modal-content']}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>할 일 수정</h3>
          <input
            type={'text'}
            value={text}
            role="dialog"
            aria-modal="true"
            onChange={handleInputChange}
            ref={inputRef}
          ></input>
          <div>
            <button className={styles.cancel} onClick={onClose}>
              취소
            </button>
            <button className={styles.save} onClick={handleSaveBtn}>
              저장
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
export default EditModal;
