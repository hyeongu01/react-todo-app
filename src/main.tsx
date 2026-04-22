import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoListProvider } from './contexts/TodoContext';
import { ThemeContextProvider } from './contexts/ThemeContext.tsx';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <TodoListProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </TodoListProvider>
  </ThemeContextProvider>
);
