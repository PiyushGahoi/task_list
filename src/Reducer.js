const initialState = [];
  
  export default function tasks(state = initialState, action) {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            title: action.title,
            description:action.description,
            date:action.date,
            priority:action.priority
          }
        ]
  
      case "DELETE_TODO":
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case "EDIT_TODO":
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo,
            title: action.title,
            description:action.description,
            date:action.date,
            priority:action.priority
            } :
            todo
        )
      default:
        return state
    }
  }
  