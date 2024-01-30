import { useState } from 'react'

function TodoInput(props) {
  const { addTodo } = props
  function addTodoHandler() {
    if (text.trim() === '') return
    addTodo(text)
    setText('')
  }

  const [text, setText] = useState('')
  function handleChangeText(event) {
    setText(event.target.value)
  }

  function handleInputKeydown(event) {
    if (event.key === 'Enter') {
      addTodoHandler()
    }
  }

  return (
    <div className="my-6 flex">
      <div className="flex-1 mr-2">
        <input
          value={text}
          onChange={handleChangeText}
          onKeyDown={handleInputKeydown}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
        />
      </div>
      <button
        onClick={addTodoHandler}
        className="bg-blue-500 py-1.5 px-3 rounded hover:bg-blue-700 text-white"
      >
        Add todo
      </button>
    </div>
  )
}

export default TodoInput
