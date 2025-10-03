import TaskItem from './TaskItem'

 function TaskList({ tasks, onToggleComplete, onDelete, onUpdate  ,  darkMode}) {
  if (tasks.length === 0) {
    return (
      <div className={"text-lg sm:text-xl h-[120px] rounded-lg shadow content-center text-center mx-auto" + (darkMode? "bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-600" : "bg-white border-2 border-amber-500")}>
        <p className={(darkMode ? "text-gray-400" : "text-amber-600")}>
          🗃️لا يوجد مهام !! اضف مهمه جديده🗃️
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