import { fetchNews } from "../api/news";
import NewsCard from "../components/NewsCard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState([]);

  const location = useLocation();
  const category =
    new URLSearchParams(location.search).get("category") ?? "general";

  useEffect(() => {
    if (category) {
      fetchNews(category).then(setNews);
    }
  }, [category]);

  return (
    <div className="news-list py-7">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Home;
