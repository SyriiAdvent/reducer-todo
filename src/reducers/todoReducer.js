export const initialState = {
  todoList: [
    {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
  ]
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: state.todoList.concat({
          item: action.value,
          completed: false,
          id: new Date() * Math.random() * 100
        })
      }
    case 'TOGGLE_TODO':
      return {
        todoList: state.todoList.map( item => {
          if(item.id !== action.todoID) {
            return item
          }
        return {
          ...item,
          completed: !item.completed
        }
      })
    };
    case 'REMOVE_TODO':
      return {todoList: state.todoList.filter( item => item.id !== action.todoID)};

  default:
    return state
  }
}
