import React from "react";
import { formatDate } from "../api/dateformat";

const NewsCard = ({ article, handleCardClick }) => {
  const { title, description, url, urlToImage, author, publishedAt } = article;

  return (
    <div
      onClick={() => handleCardClick(article)}
      className="max-w-4xl mx-auto mb-6 rounded shadow-md overflow-hidden border bg-white hover:cursor-pointer p-2 md:flex"
    >
      <div className="relative h-48 md:h-auto md:w-1/3">
        <img
          src={urlToImage || "https://via.placeholder.com/150"}
          alt={title}
          className="w-full h-full object-cover md:rounded-lg"
        />
      </div>

      <div className="p-4 md:w-2/3">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        <p className="text-xs text-gray-500 mt-2">
          short by {author} / {formatDate(publishedAt)}
        </p>

        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm mt-3 inline-block font-medium hover:underline"
        >
          Read more at X (Formerly Twitter)
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
