import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action) {
  switch (action.type) {
    case 'create':
      return [
        {
          task: action.task,
          id: uuidv4(),
          checked: false
        }, ...state
      ]
    case 'toggle':
      return state.map(el => {
        if (el.id === action.id) {
          return { ...el, checked: !el.checked }
        }
        return el
      })
    case 'update':
      return state.map(el => {
        if (el.id === action.id) {
          el.task = action.task
        }
        return el
      })
    case 'remove':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state

  }
}