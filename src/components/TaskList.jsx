import TaskItem from './TaskItem'

 function TaskList({ tasks, onToggleComplete, onDelete, onUpdate  ,  darkMode}) {
  if (tasks.length === 0) {
    return (
      <div className={" p-8 rounded-lg shadow text-center" + (darkMode? "bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-600" : "bg-white border-2 border-amber-500")}>
        <p className={(darkMode ? "text-gray-400" : "text-amber-600")}>
          🎉 مفيش مهام! خليك فاضي يا برنس!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          darkMode={darkMode}
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default TaskList;