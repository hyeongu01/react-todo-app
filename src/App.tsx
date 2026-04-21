import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { TodoListProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoListProvider>
      <div className={'container'}>
        <div className={'card'}>
          <Header />
          <AddTask />

          <div className="filters">
            <button className="active">전체</button>
            <button>미완료</button>
            <button>완료</button>
          </div>

          <TodoList />

          <hr />

          <div className="footer">
            <span>총 5개 중 2개 완료</span>
            <button className="clear">완료 항목 삭제</button>
          </div>
        </div>
      </div>
    </TodoListProvider>
  );
}

export default App;
