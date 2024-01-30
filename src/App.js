import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [list, setList] = useState([
    { id: 1, text: '学习 HTML CSS JS', completed: true },
    { id: 2, text: '学习 Vue React 框架', completed: false },
    { id: 3, text: '学习 Node.js 服务端，全栈开发', completed: false },
  ])
  function addTodo(t) {
    const id = `${list.length + 1}-${Math.random().toString().slice(-5)}` // 生成一个随机的 id
    const newTodo = { id, text: t, completed: false }
    setList([...list, newTodo])
  }
  function deleteTodo(id) {
    setList(
      list.filter((item) => item.id !== id) // filer 会返回一个新数组，不会改变原数组
    )
  }
  function toggleCompleted(id) {
    setList(
      // map 返回一个新数组，而不改变原数组
      list.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  return (
    <div className="w-96 mx-auto mt-6 text-center">
      <h1 className="text-4xl font-bold">Todo 待办事项</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        list={list}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  )
}

export default App
