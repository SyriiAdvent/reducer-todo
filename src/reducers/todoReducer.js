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
      const updatedArray = state.map( item => {
        if (item.id !== action.todoID) {
          console.log('TOGGLER', item)
          return item
        }
      })
      return [
        ...state,
        updatedArray
      ]

  default:
    return state
  }
}
