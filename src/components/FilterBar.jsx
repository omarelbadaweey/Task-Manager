export default function FilterBar({ filter, setFilter, searchQuery, setSearchQuery , darkMode}) {
  return (
    <div className={`${darkMode? "bg-gradient-to-r from-gray-800 to-gray-900 " : "bg-gradient-to-l from-amber-200 to-orange-300 text-amber-200"} p-6 rounded-lg shadow-md mb-6`}>
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* شريط البحث */}
        <div className="flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في المهام..."
            className={" w-full p-3  " + (darkMode ? " bg-gray-700  focus:ring-blue-400 text-white" : " focus:ring-amber-500 bg-white text-gray-900 ") + " rounded-lg focus:outline-none focus:ring-2 "}
          />
        </div>
        
        {/* أزرار الفلترة */}
        <div className="flex gap-2">
          {[
            { value: 'all', label: 'كل المهام' },
            { value: 'active', label: 'غير مكتمل' },
            { value: 'completed', label: 'مكتمل' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                filter === value 
                  ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-amber-600 text-white'}` 
                  : `${darkMode ? 'bg-gray-700 text-white hover:bg-blue-500' : ' text-white bg-amber-500 hover:bg-amber-700'}`
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  )
}