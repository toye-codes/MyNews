import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      // Update the dark mode class based on the new state
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newMode;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <button
        type="button"
        onClick={handleDarkMode}
        className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
        {darkMode ? (
          <Sun size={24} className="text-yellow-500" />
        ) : (
          <Moon size={24} className="text-blue-500" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
