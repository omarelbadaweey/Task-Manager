function Header({ darkMode, setDarkMode }) {
  return (
    <header
      dir="auto"
      className={`      ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-amber-100"
          : "bg-gradient-to-tr from-amber-200 to-orange-300 text-amber-200"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1
            className={`text-3xl font-bold flex items-center gap-3 ${
              darkMode ? "text-blue-400" : "text-white"
            }`}
          >
            مدير المهام {darkMode ? "🗂️" : "🗃️"}
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg cursor-pointer  ${
              darkMode ? "bg-blue-500 " : "bg-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
