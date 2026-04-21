import { createContext, useState, useContext } from 'react';
import { type TodoType } from '../types/Todo.types';

type TodoListContextType = {
  todoList: TodoType[];
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number) => void;
};

const TodoListContext = createContext<TodoListContextType | null>(null);

export function TodoListProvider({ children }: { children: React.ReactNode }) {
  const [todoList, setTodoList] = useState<TodoType[]>([
    { id: 999, title: 'React 학습하기', isDone: false },
  ]);

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
    <TodoListContext.Provider value={{ todoList, addTodo, toggleTodo }}>
      {children}
    </TodoListContext.Provider>
  );
}

export function useTodoList() {
  const ctx = useContext<TodoListContextType | null>(TodoListContext);
  if (ctx === null) throw new Error('TodoList 컨텍스트가 비어있습니다.');
  return ctx;
}
