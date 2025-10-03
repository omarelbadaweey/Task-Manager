import { useState } from 'react'

function TaskItem({ task, onToggleComplete, onDelete, onUpdate , darkMode}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(task.id, { text: editText })
      setIsEditing(false)
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-700'
      case 'medium': return 'bg-blue-600'
      case 'low': return 'bg-green-600'
      default: return 'bg-gray-500'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'عمل': return `${darkMode ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-blue-200 text-blue-900'}`
      case 'شخصي': return `${darkMode ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-green-200 text-green-900'}`
      case 'متجر': return `${darkMode ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-yellow-200 text-yellow-900'}`
      default: return `${darkMode ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' : 'bg-gray-200 text-gray-900' }`
    }
  }

  return (
    <section className={`${darkMode? "bg-gradient-to-r from-gray-800 to-gray-900 " : "bg-gradient-to-r from-orange-300 to-amber-200 text-amber-500"} p-4 rounded-lg shadow border-l-4 ${
      task.completed ? 'border-green-500 opacity-70' : 'border-blue-500'
    }`}>
      
      <div className="flex items-start gap-4">
        
        {/* زر الإكمال */}
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
            task.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : `border-gray-400 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`
          }`}
        >
          {task.completed && '✓'}
        </button>

        {/* محتوى المهمة */}
        <div className="flex-1">
          
          {isEditing ? (
            // وضع التعديل
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
              >
                حفظ
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700"
              >
                إلغاء
              </button>
            </div>
          ) : (
            // وضع العرض
            <div className="mb-3">
              <p className={`text-lg ${task.completed ? 'line-through text-white' : 'text-gray-900 dark:text-white'}`}>
                {task.text}
              </p>
            </div>
          )}

          {/* التاجات والمعلومات */}
          <div className="flex flex-wrap gap-2 items-center">
            
            {/* تصنيف */}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
              {task.category}
            </span>
            
            {/* أولوية */}
            <div className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
              <span className="text-sm text-white">
                {task.priority === 'high' ? 'عالي' : task.priority === 'medium' ? 'متوسط' : 'منخفض'}
              </span>
            </div>
            
            {/* تاريخ الاستحقاق */}
            {task.dueDate && (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                📅 {new Date(task.dueDate).toLocaleDateString('ar-EG')}
              </span>
            )}
            
          </div>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            🗑️
          </button>
        </div>

      </div>
    </section>
  )
}
export default TaskItem;