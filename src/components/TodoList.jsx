// import React, { Component } from 'react';
import React, { useEffect, useReducer } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import '../css/TodoList.css'
import { Context } from '../context'
import reducer from '../reducer';


export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state])

  const showTodos = () => {
    if (state) {
      return (state.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.task}
          checked={todo.checked} />
      )))
    }
  }
  return (
    <Context.Provider value={
      { dispatch }
    }>
      <div className='TodoList'>
        <h1>TODO</h1>
        <NewTodoForm />
        <div>
          <ul>{showTodos()}</ul>
        </div>
      </div>
    </Context.Provider>
  )
}




// USE STATE
// export default function TodoList() {
//   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos])

//   const showTodos = () => {
//     return (todos.map(todo => (
//       <Todo
//         key={todo.id}
//         id={todo.id}
//         todo={todo.task}
//         checked={todo.checked} />
//     )))
//   }
//   const create = (todo) => {
//     let newTodo = { task: todo, id: uuidv4(), checked: false }
//     setTodos((prevTodos => [...prevTodos, newTodo]))
//   }
//   const toggleCheckbox = (id) => {
//     setTodos(todos.map(el => {
//       if (el.id === id) {
//         el.checked = !el.checked

//       } return el
//     }))
//   }
//   const update = (id, task) => {
//     let editedTask = todos.map(el => {
//       if (el.id === id) {
//         el.task = task
//         return el
//       } else {
//         return el
//       }
//     })
//     setTodos(editedTask)
//   }
//   const remove = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id))
//   }
//   return (
//     <Context.Provider value={
//       { create, update, toggleCheckbox, remove }
//     }>
//       <div className='TodoList'>
//         <h1>TODO</h1>
//         <NewTodoForm />
//         <div>
//           <ul>{showTodos()}</ul>
//         </div>
//       </div>
//     </Context.Provider>

//   )
// }





//Class
// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { todos: [] }
//     this.create = this.create.bind(this);
//     this.toogleCheckbox = this.toogleCheckbox.bind(this);
//     this.remove = this.remove.bind(this);
//     this.update = this.update.bind(this)
//   }
//   showTodos() {
//     return (this.state.todos.map(todo => (
//       <Todo
//         key={todo.id}
//         id={todo.id}
//         todo={todo.task}
//         checked={todo.checked}
//         checkboxChange={this.toogleCheckbox}
//         removeTodo={this.remove}
//         updateTodo={this.update} />
//     )))
//   }
//   create(todo) {
//     let newTodo = { ...todo, id: uuidv4(), checked: false }
//     this.setState(st => ({
//       todos: [...st.todos, newTodo]
//     }))
//   }
//   toogleCheckbox(id) {
//     let toogledCheckbox = this.state.todos.map(el => {
//       if (el.id === id) {
//         el.checked = !el.checked
//         return el
//       }
//     })
//     this.setState({
//       todos: toogledCheckbox
//     })
//   }
//   update(id, task) {
//     let editedTask = this.state.todos.map(el => {
//       if (el.id === id) {
//         el.task = task
//         return el
//       } else {
//         return el
//       }
//     })
//     this.setState({
//       todos: editedTask
//     })
//   }
//   remove(id) {
//     this.setState({
//       todos: this.state.todos.filter(todo => todo.id !== id)
//     })
//   }
//   render() {
//     return (
//       <div className='TodoList'>
//         <h1>TODO</h1>
//         <NewTodoForm createTodo={this.create} />
//         <div>
//           <ul>{this.showTodos()}</ul>
//         </div>

//       </div>
//     )
//   }
// }

// export default TodoList
