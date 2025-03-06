import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import useFetch from "../utility/useFetch";

const dummyImage = "https://via.placeholder.com/300x200?text=No+Image";

const Entertainment = () => {
  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?category=entertainment&apikey=${apiKey}`;

  const { data: articles, loading, error } = useFetch(url);

  return (
    <section className="container mx-auto bg-gray-100 dark:bg-gray-900 min-h-screen py-8 px-4">
      <NavBar />
      <h1 className="text-3xl font-bold my-4 text-center text-gray-900 dark:text-gray-100">
        Entertainment News
      </h1>

      <div className="space-y-6">
        {loading ? (
          <p className="text-center text-gray-500">
            Loading entertainment news...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : articles.length > 0 ? (
          articles.slice(0, 6).map((article, index) => (
            <motion.div
              key={index}
              className="border dark:border-gray-700 rounded-lg shadow-md p-5 gap-5 bg-gray-200 dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="flex flex-col md:flex-row">
                {/* Left Mini-Box: Image */}
                <div className="w-full md:w-1/3 flex-shrink-0 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg">
                  <img
                    src={article.image || dummyImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>

                {/* Vertical Separator */}
                <div className="hidden md:block w-[2px] bg-gray-400 dark:bg-gray-600 mx-4"></div>

                {/* Right Mini-Box: Content */}
                <div className="md:w-2/3 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold dark:text-gray-100">
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

      <Footer />
    </section>
  );
};

export default Entertainment;
