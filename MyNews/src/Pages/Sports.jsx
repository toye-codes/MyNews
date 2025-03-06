import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import useFetch from "../utility/useFetch";

const dummyImage = "https://via.placeholder.com/300x200?text=No+Image"; // Default placeholder

const Sports = () => {
  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?category=sports&apikey=${apiKey}`;

  const { data: articles, loading, error } = useFetch(url);

  return (
    <section className="container mx-auto bg-gray-100 dark:bg-gray-900 min-h-screen p-5">
      <NavBar />

      <h1 className="text-3xl font-bold my-4 text-center text-gray-800 dark:text-gray-200">
        Sports News
      </h1>

      <div className="space-y-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading sports news...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : articles.length > 0 ? (
          articles.slice(0, 6).map((article, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-5 gap-5 bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              {/* Left: Image Section */}
              <div className="w-full md:w-1/3 flex-shrink-0 relative">
                <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">
                  <img
                    src={article.image || dummyImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="hidden md:block w-[2px] bg-gray-300 dark:bg-gray-700"></div>

              {/* Right: Content Section */}
              <div className="md:w-2/3">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {article.description}
                  </p>

                  {/* Author & Read More Link */}
                  <div className="mt-2 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p>By {article.author || "Unknown"}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline dark:text-blue-400">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="dark:text-gray-300">No articles found.</p>
        )}
      </div>

      <div className="px-2">
        <Footer />
      </div>
    </section>
  );
};

export default Sports;
