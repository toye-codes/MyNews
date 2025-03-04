import { useEffect, useState } from "react";

const NewsComponent = () => {
  const [myNews, setMyNews] = useState([]); // Initialize with an empty array for safe mapping

  useEffect(() => {
    const getNews = async () => {
      const apikey = "a9205fccb680acef7f0e2551d9b196df";
      const url = `https://gnews.io/api/v4/search?q=business&lang=en&country=us&max=10&apikey=${apikey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMyNews(data.articles); // Store the entire articles array
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  return (
    <div>
      <h1>News Images</h1>
      <ul>
        {myNews.length > 0 ? (
          myNews.map((article, index) => (
            <li key={index}>
              <img
                src={article.image}
                alt={article.title || "News"}
                width="200"
              />
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default NewsComponent;
