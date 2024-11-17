import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchNews } from "../api/news";
import NewsCard from "../components/NewsCard";
import NewsPreview from "../components/NewsPreview";
import style from "./main.module.css";
const Home = () => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const location = useLocation();
  const category =
    new URLSearchParams(location.search).get("category") ?? "general";

  useEffect(() => {
    if (category) {
      fetchNews(category).then(setNews);
    }
  }, [category]);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const closePreview = () => {
    setSelectedArticle(null);
  };

  return (
    <div className={style["main-container"]}>
      {/* News List Section */}
      <div
        className={`${
          selectedArticle ? "md:w-1/2 lg:w-2/3" : "w-full"
        }  overflow-y-auto transition-all duration-300 ease-in-out`}
      >
        {news.map((article, index) => (
          <div key={index}>
            <NewsCard article={article} handleCardClick={handleCardClick} />
          </div>
        ))}
      </div>

      {/* Preview Pane (Always Rendered for Desktop) */}
      {selectedArticle ? (
        <div
          className={`${style["news-prev-ctn"]} ${
            selectedArticle
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <NewsPreview article={selectedArticle} onClose={closePreview} />
        </div>
      ) : null}

      {/* Modal for Mobile */}
      {selectedArticle && (
        <div className={style["prev-ctn-modal"]}>
          <div className={style["prev-modal-ctn-action"]}>
            <button onClick={closePreview} className={style["prev-close-btn"]}>
              ✕
            </button>
            <div className="mt-4">
              <NewsPreview article={selectedArticle} onClose={closePreview} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
