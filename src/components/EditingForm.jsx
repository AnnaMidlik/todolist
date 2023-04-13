import React, { useState, useRef, useEffect, useContext } from 'react'
import '../css/EditingForm.css'
import { Context } from '../context';
import TextareaAutosize from 'react-textarea-autosize';

export default function Textarea({ task, setEditing, id }) {
  const textareaRef = useRef(null)
  const [editedTask, setEditedTask] = useState(task)
  const { dispatch } = useContext(Context)

  useEffect(() => {
    let textarea = textareaRef.current
    textarea.focus()
    textarea.setSelectionRange(textarea.value.length, textarea.value.length)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'update',
      id: id,
      task: editedTask
    })
    setEditing(false)
  }
  return (
    <form className='Todo-edit-form' onSubmit={handleSubmit}>
      {/* <textarea
        id='edit-textarea'
        name='task'
        value={editedTask}
        ref={textareaRef}
        onChange={(e) => setEditedTask(e.target.value)}>
      </textarea> */}
      <TextareaAutosize
        id='edit-textarea'
        name='task'
        value={editedTask}
        ref={textareaRef}
        onChange={(e) => setEditedTask(e.target.value)} />
      <button>Save</button>
    </form>
  )
}