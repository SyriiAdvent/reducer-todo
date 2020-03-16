import React, { useReducer } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import { todoReducer, initialState } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      {console.log('ReducerState satrtting from App', state)}
      <TodoForm dispatch={dispatch} />
      <TodoList items={state} dispatch={dispatch} />
    </div>
  );
}

export default App;