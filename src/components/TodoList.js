import TodoItem from './TodoItem'

function TodoList(props) {
  const { list = [], deleteTodo, toggleCompleted } = props

  if (list.length === 0) {
    return (
      <div>
        <p className="text-gray-400">暂无待办事项</p>
      </div>
    )
  }

  return (
    <div>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        ></TodoItem>
      ))}
    </div>
  )
}

export default TodoList
