import navbar from "../assets/Images/navbar.png";
import logo from "../assets/Images/logo.png";
import { Sun, Moon, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    console.log(setSearch);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      console.log(`Searching for: ${search}`); // Replace with actual search logic
    } else {
      console.log("Search input is empty.");
    }
  };

  useEffect(() => {
    console.log(`Search updated: ${search}`); // Logs whenever `search` changes. Must remove this feature when working on the functionality
  }, [search]);

  const handleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark"); // Enable dark mode
      } else {
        document.documentElement.classList.remove("dark"); // Disable dark mode
      }
      return newMode; // Update state
    });
  };

  const handleToggle = () => setIsOpen(!isOpen);

  // Updated menuItems array with links
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Marketings", link: "/marketing" },
    { label: "Entertainment", link: "/entertainment" },
    { label: "Sports", link: "/sports" }
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-7 py-4 bg-gray-300 shadow-md dark:bg-black dark:text-white">
      {/* Logo */}
      <img src={logo} alt="d'vogue" className="w-10 h-10 rounded-2xl mr-3" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-5 font-semibold text-lg">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="list-none hover:underline hover:text-blue-500 transition-all duration-150 cursor-pointer dark:hover:text-blue-300">
            {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          </li>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={handleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="flex gap-3">
          <label htmlFor="input">
            <input
              type="text"
              placeholder="...search recent blog post"
              className="hidden md:inline border-2 rounded-xl text-center dark:text-black"
              value={search}
              onChange={handleOnChange}
            />
          </label>

          <button
            type="button"
            className="hidden md:flex items-center gap-2 bg-white rounded-xl px-3 dark:text-black"
            onClick={handleSearch}>
            <Search size={20} />
            <span className="font-semibold">Search</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          type="button"
          onClick={handleToggle}
          className="md:hidden w-7 h-7">
          <img src={navbar} alt="Menu" className="dark:bg-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-5 dark:bg-gray-800 dark:text-white">
          <div className="flex justify-between items-center pb-3">
            <img src={logo} alt="d'vogue" className="w-8 h-8" />
            <button onClick={handleToggle} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <hr className="border-gray-300 mb-5 dark:border-gray-600" />
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="text-lg font-medium hover:bg-blue-500 hover:text-white hover:font-bold py-2 px-3 rounded-lg transition-all duration-200 cursor-pointer dark:hover:bg-blue-300 dark:hover:text-black"
                onClick={handleToggle} // Close menu on item click
              >
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
