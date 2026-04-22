import { createContext, useState, useContext } from 'react';
import { type TodoType } from '../types/Todo.types';

type TodoListContextType = {
  todoList: TodoType[];
  filter: 'all' | 'process' | 'done';
  updateFilter: (newFilter: string) => void;
  getFilteredList: () => TodoType[];
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number) => void;
};

const TodoListContext = createContext<TodoListContextType | null>(null);

export function TodoListProvider({ children }: { children: React.ReactNode }) {
  const [todoList, setTodoList] = useState<TodoType[]>([
    { id: 999, title: 'React 학습하기', isDone: false },
    { id: 998, title: '점심 식사', isDone: true },
  ]);

  const [filter, setFilter] = useState<'all' | 'process' | 'done'>('all');

  function updateFilter(newFilter: string) {
    const temp = newFilter as 'all' | 'process' | 'done';
    if (['all', 'process', 'done'].includes(newFilter)) setFilter(temp);
  }

  function getFilteredList(): TodoType[] {
    return todoList.filter((todo) => {
      if (filter === 'all') return true;
      if (filter === 'process') return todo.isDone === false;
      if (filter === 'done') return todo.isDone;
    });
  }

  function addTodo(todo: TodoType) {
    setTodoList((prev) => [...prev, todo]);
  }

  function toggleTodo(id: number) {
    const newList: TodoType[] = todoList.map((todo): TodoType => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoList(newList);
  }

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        filter,
        getFilteredList,
        addTodo,
        toggleTodo,
        updateFilter,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodoList() {
  const ctx = useContext<TodoListContextType | null>(TodoListContext);
  if (ctx === null) throw new Error('TodoList 컨텍스트가 비어있습니다.');
  return ctx;
}
