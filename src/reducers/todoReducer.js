export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {item: action.value,
        completed: false,
        id: new Date() * Math.random() * 100}
      ]
      
    case 'TOGGLE_TODO':
      const updatedArray = state.filter((result, index) => {
      //  console.log('filter result', result) 
        if (result.id !== action.todoID) {
          return !result.completed
        }
      })
      return [
        ...state,
        completed: updatedArray
      ]

  default:
    return state
  }
}
