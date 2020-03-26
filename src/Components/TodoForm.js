import React, { useState } from 'react'

const TodoForm = ({ dispatch }) => {
  const [newTodoItem, setNewTodoItem] = useState('')

  const handleChange = e => {
    setNewTodoItem(e.target.value)
  }

  return (
    <div>
      <label forhtml='todo'> Whats on your Agenda?{' '}
      <br />
        <input
          id='todo'
          name='todo'
          value={newTodoItem}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => dispatch({ type: 'ADD_TODO', value: newTodoItem })}>Submit</button>
      <hr />
    </div>
  )
}

export default TodoForm
