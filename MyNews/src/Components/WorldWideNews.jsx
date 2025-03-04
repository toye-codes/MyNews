import React, { useEffect, useState } from "react";
import { ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const WorldWideNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const formattedNews = data.articles.map((article) => ({
          category: "General News",
          title: article.title || "Untitled Article",
          description: article.description || "No description available.",
          author: article.source.name || "Unknown Author",
          readTime: "2 Mins Read",
          image: article.image || "/api/placeholder/400/300",
          url: article.url,
        }));

        setNews(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-5 py-8 bg-blue-500 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-100">Worldwide News</h2>
        <motion.a
          href="#"
          className="flex items-center text-red-500 hover:text-red-600 text-sm"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}>
          Find more
          <ArrowRight className="ml-1 w-4 h-4" />
        </motion.a>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen">
        {news.length > 0 ? (
          news.map((item, index) => (
            <motion.div
              key={index}
              className={`relative ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2 lg:h-full" // First card with larger height and width, covering both rows
                  : "lg:h-auto" // Adjust other cards to auto-height based on content
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120, // Increased spring stiffness for quicker animation
              }}>
              {/* News Card */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? "lg:h-full" : ""
                  }`} // Ensure first item takes full height of two rows
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                {/* News Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white/90 text-sm line-clamp-3 mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/api/placeholder/32/32"
                        alt={item.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-white text-xs">{item.author}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60 text-xs">
                        {item.readTime}
                      </span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80">
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Loading news...</p>
        )}
      </div>
    </motion.section>
  );
};

export default WorldWideNews;
