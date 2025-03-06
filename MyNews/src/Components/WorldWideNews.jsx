import React, { useEffect, useState } from "react";
import { ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const WorldWideNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const { articles } = await response.json();
        setNews(
          articles.map((article) => ({
            category: "General News",
            title: article.title || "Untitled Article",
            description: article.description || "No description available.",
            author: article.source.name || "Unknown Author",
            readTime: "2 Mins Read",
            image: article.image || "/api/placeholder/400/300",
            url: article.url,
          }))
        );
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-5 py-8 bg-gray-300 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-100">Worldwide News</h2>
        <motion.a
          href="#"
          aria-label="Find more news"
          className="flex items-center text-red-500 hover:text-red-600 text-sm"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}>
          Find more <ArrowRight className="ml-1 w-4 h-4" />
        </motion.a>
      </div>

      {/* Status Messages */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading && !error && (
        <p className="text-gray-500 text-center">Loading news...</p>
      )}

      {/* News Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div
              key={item.url}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, type: "spring", stiffness: 120 }}>
              {/* News Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

              {/* News Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-3 mb-3">
                  {item.description}
                </p>

                {/* Author and Share Button */}
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
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default WorldWideNews;
