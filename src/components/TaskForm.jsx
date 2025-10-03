import { useState } from "react";
import { errorAlert } from "../utils/SweetAlert";

function TaskForm({ onAddTask, darkMode }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("عام");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask({ text, category, priority });
      setText("");
      setCategory("عام");
      setPriority("medium");
    }
  };

  const alertText = () => {
    if (!text.trim()) {
      errorAlert("اكتُب مهمتك أولا", darkMode);
    }
  };
  return (
    <form
      dir="auto"
      onSubmit={handleSubmit}
      className={
        " p-10 rounded-lg shadow-md mb-6 " +
        (darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 "
          : "bg-gradient-to-l from-amber-200 to-orange-300 text-amber-200")
      }
    >
      <div className={" grid grid-cols-1 md:grid-cols-4 gap-4"}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب المهمة هنا..."
          className={
            "col-span-2 p-5  " +
            (darkMode
              ? " bg-gray-700  focus:ring-blue-400 text-white"
              : " focus:ring-amber-500 bg-white text-gray-900 ") +
            " rounded-lg focus:outline-none focus:ring-2 "
          }
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={
            "p-5   rounded-lg focus:outline-none" +
            (darkMode
              ? " bg-gray-700   text-white"
              : " focus:ring-amber-500 bg-white text-gray-900 ")
          }
        >
          <option value="عام">عام</option>
          <option value="عمل">عمل</option>
          <option value="شخصي">شخصي</option>
          <option value="متجر">متجر</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={
            "p-4 rounded-lg focus:outline-none" +
            (darkMode
              ? " bg-gray-700   text-white"
              : " focus:ring-amber-500 bg-white text-gray-900 ")
          }
        >
          <option value="low">منخفض</option>
          <option value="medium">متوسط</option>
          <option value="high">عالي</option>
        </select>
      </div>

      <button
        onClick={alertText}
        type="submit"
        className={
          "mt-4 w-full py-4 px-6 rounded-lg transition-colors font-bold text-white cursor-pointer" +
          (darkMode
            ? " bg-blue-500 hover:bg-blue-600"
            : " bg-amber-500 hover:bg-amber-600  ")
        }
      >
        إضافة المهمة
      </button>
    </form>
  );
}

export default TaskForm;
