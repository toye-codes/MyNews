import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    if (!url) return; // Prevent fetching if URL is not provided

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        let finalUrl = url;

        // Append API key if the request is for NewsAPI
        if (url.includes("newsapi.org")) {
          const apiKey = import.meta.env.VITE_API_KEY_2;
          finalUrl = `${url}&apiKey=${apiKey}`;
        }

        const response = await axios.get(finalUrl);
        setData(response.data.articles || response.data); // Handle cases where the data has `articles`
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
