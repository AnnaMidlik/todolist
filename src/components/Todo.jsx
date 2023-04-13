import React, { useState, useContext } from 'react';
import { Context } from '../context';
import '../css/Todo.css'
// import TextareaAutosize from 'react-textarea-autosize'
import EditingForm from './EditingForm'

export default function Todo({ id, todo, checked }) {
  const [editing, setEditing] = useState(false)
  const { dispatch } = useContext(Context)

  const makeTodo = () => {
    let todoComponent
    if (editing) {
      todoComponent = (
        <EditingForm
          id={id}
          task={todo}
          setEditing={setEditing} />
      )
    } else {
      todoComponent = (
        <div className='Todo'>
          < label className={`Todo-checkbox ${checked ? 'checked' : ''} `}>
            <input
              type='checkbox'
              id='todo'
              checked={checked}
              onChange={() => dispatch({
                type: 'toggle',
                id: id
              })}
            />
            {todo}
          </label>
          <div className='Todo-btns'>
            <button id='edit' onClick={() => setEditing(true)} >
              <i className="fas fa-pen light" />
            </button>
            <button onClick={() => dispatch({
              type: 'remove',
              id: id
            })}>
              <i className="fas fa-trash light" />
            </button>
          </div>
        </div>
      )
    }
    return todoComponent
  }
  return (
    <li>{makeTodo()}</li>
  )
}


// USE STATE
// export default function Todo({ id, todo, checked }) {
//   const [task, setTask] = useState(todo)
//   const [editing, setEditing] = useState(false)
//   const { update, remove, toggleCheckbox } = useContext(Context)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     update(id, task)
//     setEditing(false)
//   }
//   const makeTodo = () => {
//     let todoComponent
//     if (editing) {
//       todoComponent = (
//         <form className='Todo-edit-form' onSubmit={handleSubmit}>
//           <input
//             id='edit-input'
//             type='text'
//             name='task'
//             value={task}
//             onChange={(e) => setTask(e.target.value)}>
//           </input>
//           <button>Save</button>
//         </form>
//       )
//     } else {
//       todoComponent = (
//         <div className='Todo'>
//           < label className={`Todo-checkbox ${checked ? 'checked' : ''} `}>
//             <input
//               type='checkbox'
//               id='todo'
//               checked={checked}
//               onChange={() => toggleCheckbox(id)}
//             />
//             {todo}
//           </label>
//           <div className='Todo-btns'>
//             <button onClick={() => setEditing(true)} >
//               <i className="fas fa-pen light" />
//             </button>
//             <button onClick={() => remove(id)}>
//               <i className="fas fa-trash light" />
//             </button>
//           </div>
//         </div>
//       )
//     }
//     return todoComponent
//   }
//   return (
//     <li>{makeTodo()}</li>
//   )
// }


//CLASS
// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { task: this.props.todo, isEditing: false }
//     this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
//     this.handleRemove = this.handleRemove.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleUpdate = this.handleUpdate.bind(this)

//   }
//   handleToggleCheckbox(e) {
//     this.props.checkboxChange(this.props.id)
//   }
//   handleEdit(e) {
//     this.setState({ isEditing: true })
//   }
//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   handleUpdate(e) {
//     e.preventDefault();
//     this.props.updateTodo(this.props.id, this.state.task);
//     this.setState({ isEditing: false })
//   }
//   handleRemove(e) {
//     this.props.removeTodo(this.props.id);
//   }
//   render() {
//     let todoComponent
//     if (this.state.isEditing) {
//       todoComponent = (
//         <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
//           <input
//             type='text'
//             name='task'
//             value={this.state.task}
//             onChange={this.handleChange}>
//           </input>
//           <button>Save</button>
//         </form>
//       )
//     } else {
//       todoComponent = (<div className='Todo'>
//         <div className={`Todo-checkbox ${this.props.checked ? 'checked' : ''} `}>
//           <input
//             type='checkbox'
//             id='todo'
//             checked={this.props.checked}
//             onChange={this.handleToggleCheckbox} />
//           <label htmlFor='todo'>
//             {this.props.todo}
//           </label>
//         </div>

//         <div className='Todo-btns'>
//           <button onClick={this.handleEdit}>
//             <i className="fas fa-pen light" />
//           </button>
//           <button onClick={this.handleRemove}>
//             <i className="fas fa-trash light" />
//           </button>
//         </div>
//       </div>
//       )
//     }
//     return (
//       <li>{todoComponent}</li>
//     )
//   }
// }
// export default Todo