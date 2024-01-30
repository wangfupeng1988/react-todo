function TodoItem({ todo, deleteTodo, toggleCompleted }) {
  const { id, text, completed } = todo

  return (
    <div className="text-left">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span className={completed ? 'line-through ml-2' : 'ml-2'}>{text}</span>
      <button
        className="ml-2 text-blue-500"
        title="删除"
        onClick={() => deleteTodo(id)}
      >
        X
      </button>
    </div>
  )
}

export default TodoItem
