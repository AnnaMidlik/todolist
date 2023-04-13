import React, { useState, useContext } from 'react';
import { Context } from '../context';
import '../css/NewTodoForm.css'

export default function NewTodoForm() {
  const [task, setTask] = useState('')
  const { dispatch } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
      dispatch({
        type: 'create',
        task: task
      })
      setTask('')
    }
  }
  return (
    <form onSubmit={handleSubmit} className='NewTodoForm'>
      <button>+</button>
      <input
        type='text'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={'Create a new todo'}>
      </input>
    </form>
  )
}


//USE STATE
// export default function NewTodoForm({ createTodo }) {
//   const [task, setTask] = useState('')
//   const { create } = useContext(Context)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task !== '') {
//       create(task)
//       setTask('')
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit} className='NewTodoForm'>
//       <button>+</button>
//       <input
//         type='text'
//         name='task'
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder={'Create a new todo'}>
//       </input>
//     </form>
//   )
// }


//CLASS
// class NewTodoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { task: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.task !== '') {
//       this.props.createTodo(this.state);
//       this.setState({ task: '' });
//     }

//   }
//   handleChange(evt) {
//     this.setState({ [evt.target.name]: evt.target.value })
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className='NewTodoForm'>
//         <button>+</button>
//         <input
//           type='text'
//           name='task'
//           value={this.state.task}
//           onChange={this.handleChange}
//           placeholder={'Create a new todo'}>
//         </input>
//       </form>
//     )
//   }
// }

// export default NewTodoForm