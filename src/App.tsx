import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Footer from './components/Footer';

function App() {
  return (
    <div className={'container'}>
      <div className={'card'}>
        <Header />
        <AddTask />
        <Filter />
        <div className={'divider'} />
        <TodoList />
        <div className={'divider'} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
