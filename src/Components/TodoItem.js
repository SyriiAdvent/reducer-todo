import React from 'react'

const TodoItem = ({ items: { item, completed, id }, dispatch}) => {
// const TodoItem = (props) => {
  return (
    <li style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <div>
        <h2
        onClick={() => dispatch({ type: 'TOGGLE_TODO', todoID: id })}
        style={completed ? {textDecoration: 'line-through'} :
         {textDecoration: 'none'}}
         >{item}</h2>
      </div>
    </li>
  )
}

export default TodoItem
