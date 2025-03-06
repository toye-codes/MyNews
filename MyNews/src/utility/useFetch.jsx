import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // Prevent unnecessary fetching

    const storedNews = localStorage.getItem("cachedNews");
    const cacheTime = localStorage.getItem("cacheTime");

    // Clear cache after 30 minutes
    const isCacheExpired = cacheTime && (Date.now() - cacheTime > 30 * 60 * 1000);

    if (storedNews && !isCacheExpired) {
      setData(JSON.parse(storedNews));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const source = axios.CancelToken.source(); // For cleanup

      try {
        let finalUrl = url;

        // Append API key if it's a GNews request
        if (url.includes("gnews.io")) {
          const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
          finalUrl = `${url}&apikey=${apiKey}`;
        }

        const response = await axios.get(finalUrl, { cancelToken: source.token });
        const fetchedData = response.data.articles || [];

        setData(fetchedData);
        localStorage.setItem("cachedNews", JSON.stringify(fetchedData));
        localStorage.setItem("cacheTime", Date.now()); // Store timestamp
      } catch (err) {
        if (axios.isCancel(err)) return; // Ignore cancelled requests
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => source.cancel("Request canceled on unmount"); // Cleanup on unmount
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
