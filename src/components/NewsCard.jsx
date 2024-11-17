import React from "react";
import { formatDate } from "../api/dateformat";
import style from "./news.module.css";
const NewsCard = ({ article, handleCardClick }) => {
  const { title, description, url, urlToImage, author, publishedAt } = article;

  return (
    <div
      onClick={() => handleCardClick(article)}
      className={style["news-card-ctn"]}
    >
      <div className="relative h-48 md:h-auto md:w-1/3">
        <img
          src={urlToImage || "https://via.placeholder.com/150"}
          alt={title}
          className="w-full h-full object-cover md:rounded-lg"
        />
      </div>

      <div className="p-4 md:w-2/3">
        <h2 className={style["news-title"]}>{title}</h2>

        <p className="text-xs text-gray-500 mt-2">
          short by {author} / {formatDate(publishedAt)}
        </p>

        <p className={style["news-description"]}>{description}</p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className={style["news-href"]}
        >
          Read more at X (Formerly Twitter)
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
