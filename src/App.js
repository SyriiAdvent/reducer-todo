import React, { useReducer } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import { todoReducer, initialState } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const todoData = state.todoList

  return (
    <div className="App">
      {console.log('ReducerState satrtting from App', state.todoList)}
      <TodoForm dispatch={dispatch} />
      <TodoList items={todoData} dispatch={dispatch} />
    </div>
  );
}

export default App;