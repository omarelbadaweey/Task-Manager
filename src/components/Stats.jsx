function Stats({ tasks , darkMode}) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0


  return (
    <div dir="rtl" className={` p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-gradient-to-bl from-amber-200 to-orange-300"} ` }>
      <h3 className={"text-xl font-bold mb-4 " + (darkMode? "text-white" : "text-amber-700")}>📊 إحصائيات المهام</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        
        {/* المهام الكلية */}
        <div className="text-center p-4 bg-blue-900 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{totalTasks}</div>
          <div className="text-sm text-blue-200">إجمالي المهام</div>
        </div>
        
        {/* المكتملة */}
        <div className="text-center p-4 bg-green-900 rounded-lg">
          <div className="text-2xl font-bold text-green-400">{completedTasks}</div>
          <div className="text-sm text-green-200">مكتملة</div>
        </div>
        
        {/* المعلقة */}
        <div className="text-center p-4 bg-yellow-900 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">{pendingTasks}</div>
          <div className="text-sm text-yellow-200">معلقة</div>
        </div>
        
        {/* نسبة الإنجاز */}
        <div className="text-center p-4 bg-purple-900 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">{completionPercentage}%</div>
          <div className="text-sm text-purple-200">نسبة الإنجاز</div>
        </div>
      
      </div>

      {/* شريط التقدم */}
      <div className="mt-6">
        <div className={`flex justify-between text-sm  mb-2 ${darkMode  ? "text-white" : "text-amber-700"}`}>
          <span>تقدم المهام</span>
          <span>{completionPercentage}%</span>
        </div>
        <div className={`w-full  rounded-full h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>



    </div>
  )
}
export default Stats;