import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchNews } from "../api/news";
import NewsCard from "../components/NewsCard";
import NewsPreview from "../components/NewsPreview";

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
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* News List Section */}
      <div
        className={`w-full md:w-1/2 lg:w-2/3 px-6 py-7 overflow-y-auto transition-transform ${
          selectedArticle ? "md:translate-x-[-50%] lg:translate-x-0" : ""
        }`}
      >
        {news.map((article, index) => (
          <div key={index} >
            <NewsCard article={article} handleCardClick={handleCardClick} />
          </div>
        ))}
      </div>

      {/* Preview Pane (Always Rendered for Desktop) */}
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3 px-6 py-7 border-l bg-gray-50 overflow-y-auto">
        {selectedArticle ? (
          <NewsPreview article={selectedArticle} onClose={closePreview} />
        ) : (
          <div className="text-center text-gray-500">
            <p>Select an article to preview it here.</p>
          </div>
        )}
      </div>

      {/* Modal for Mobile */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center md:hidden">
          <div className="relative bg-white w-full h-fit max-w-md mx-auto p-6 overflow-y-auto">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-gray-600 font-semibold "
            >
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
