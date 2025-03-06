import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import MarketingData from "../utility/JsonData/MarketingData.json"; // Import JSON data

const dummyImage = "https://via.placeholder.com/300x200?text=No+Image"; // Default placeholder image

const Marketing = () => {
  return (
    <section className="container mx-auto">
      <NavBar />

      <h1 className="text-3xl font-bold my-4 text-center">Marketing News</h1>

      <div className="space-y-6 px-3 py-3">
        {MarketingData.articles.length > 0 ? (
          MarketingData.articles.slice(0, 6).map((article, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center border dark:border-gray-700 rounded-lg shadow-md p-5 gap-5 dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              
              {/* Left: Article Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={article.image || dummyImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>

              {/* Vertical Separator */}
              <div className="hidden md:block w-[2px] bg-gray-300 dark:bg-gray-700"></div>

              {/* Right: Article Content */}
              <div className="md:w-2/3">
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

export default Marketing;
