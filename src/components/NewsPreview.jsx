import React, { useEffect } from "react";
import { contentData } from "../api/news";
import style from "./news.module.css";
const NewsPreview = ({ article, onClose }) => {
  const { title, content, url, urlToImage, author, publishedAt } = article;
  useEffect(() => {
    contentData(url);
  }, []);
  return (
    <div className={style["news-prev-ctn"]}>
      <img
        src={urlToImage || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className={style["news-prev-title"]}>{title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          By {author} /{" "}
          {new Date(publishedAt).toLocaleString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-sm text-gray-700 mb-4">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          Read Full Article
        </a>
        <button onClick={onClose} className={style["news-prev-close"]}>
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default NewsPreview;
