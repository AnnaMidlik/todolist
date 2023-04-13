import React, { useState, useRef, useEffect, useContext } from 'react'
import '../css/EditingForm.css'
import TextareaAutosize from 'react-textarea-autosize';

export default function Textarea({ task }) {
  const textareaRef = useRef(null)
  const [editedTask, setEditedTask] = useState(task)

  useEffect(() => {
    let textarea = textareaRef.current
    textarea.focus()
    textarea.setSelectionRange(textarea.value.length, textarea.value.length)
  })
  return (
    <form className='Todo-edit-form' onSubmit={handleSubmit}>
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