import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const list = props.items
  return (
    <div>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {list.map( items => <TodoItem key={items.id} items={items} dispatch={props.dispatch} />)}
      </ul>
    </div>
  )
}

export default TodoList
