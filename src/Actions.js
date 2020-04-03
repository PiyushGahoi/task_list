export const addTodo = (title,description,date,priority) => ({ type: "ADD_TODO", title,description,date,priority })
export const deleteTodo = id => ({ type: "DELETE_TODO", id })
export const editTodo = (id, title,description,date,priority) => ({ type:"EDIT_TODO", id, title,description,date,priority })
