import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Footer from './components/Footer';
import { useTodoList } from './contexts/TodoContext';

function App() {
  const { todoList } = useTodoList();

  return (
    <div className={'container'}>
      <div className={'card'}>
        <Header />
        <AddTask />
        <Filter />
        <div className={'divider'} />
        <TodoList />
        {todoList.length !== 0 && (
          <>
            <div className={'divider'} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
