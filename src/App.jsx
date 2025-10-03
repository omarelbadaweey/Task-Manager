import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  // الـ States الأساسية
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // dark mode + save to local storage
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  //savedTasks 
  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } , [tasks]); 
  // في الـ useEffect
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // LocalStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Functions
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      text: taskData.text,
      completed: false,
      category: taskData.category,
      priority: taskData.priority,
      dueDate: taskData.dueDate,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, updatedData) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );
  };

  // فلترة المهام
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !task.completed
        : filter === "completed"
        ? task.completed
        : true;

    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 " : "bg-white "
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <TaskForm darkMode={darkMode} onAddTask={addTask} />

          <FilterBar
            filter={filter}
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            darkMode={darkMode}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* قائمة المهام */}
            <div className="lg:col-span-2">
              <TaskList
                tasks={filteredTasks}
                onToggleComplete={toggleComplete}
                onDelete={deleteTask}
                onUpdate={updateTask}
                darkMode={darkMode}
              />
            </div>

            {/* الإحصائيات */}
            <div className="lg:col-span-1">
              <Stats tasks={tasks}
                darkMode={darkMode} />
            </div>
          </div>
        </div>
      </main>
            <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;