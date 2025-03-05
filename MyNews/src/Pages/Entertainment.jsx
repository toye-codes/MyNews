import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import useFetch from "../utility/useFetch";

const apiUrl =
  "https://newsapi.org/v2/top-headlines?country=us&category=entertainment";

const Entertainment = () => {
  const { data: articles, loading, error } = useFetch(apiUrl);

  return (
    <section className="container mx-auto lg:px-0">
      <NavBar />

      <h1 className="text-3xl font-bold my-4 text-center">
        Entertainment News
      </h1>

      {loading && <p className="dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-500 dark:text-red-400">{error}</p>}

      <div className="space-y-6 px-3 py-3">
        {Array.isArray(articles) && articles.length > 0
          ? articles.slice(0, 6).map((article) => (
              <div
                key={article.url || article.publishedAt}
                className="flex flex-col md:flex-row items-center border dark:border-gray-700 rounded-lg shadow-md p-5 gap-5 dark:bg-gray-900">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title || "Article image"}
                    className="w-full md:w-1/3 h-48 object-cover rounded"
                  />
                )}

                <div className="md:w-2/3">
                  <h2 className="text-lg font-semibold dark:text-gray-100">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {article.description}
                  </p>

                  <div className="mt-2 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      {article.author
                        ? `By ${article.author}`
                        : "Author unknown"}
                    </p>
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
            ))
          : !loading && (
              <p className="dark:text-gray-300">
                No entertainment articles found.
              </p>
            )}
      </div>

      <div className="px-2">
        <Footer />
      </div>
    </section>
  );
};

export default Entertainment;
