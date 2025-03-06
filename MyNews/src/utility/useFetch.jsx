import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // Prevent fetching if no URL is provided

    const storedNews = localStorage.getItem("cachedNews");
    if (storedNews) {
      setData(JSON.parse(storedNews));
      setLoading(false);
      return
    }

    


    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let finalUrl = url;

        // Append API key if the request is for Mediastack
        if (url.includes("mediastack.com")) {
          const apiKey = import.meta.env.VITE_API_KEY_2;
          finalUrl = `${url}&access_key=${apiKey}`;
        }

        const response = await axios.get(finalUrl);
        const fetchedData = response.data.data || [];

        setData(fetchedData);
        localStorage.setItem("cachedNews", JSON.stringify(fetchedData)); // Store in localStorage
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
