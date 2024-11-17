import React, { useEffect } from "react";
import { contentData } from "../api/news";

const NewsPreview = ({ article, onClose }) => {
  const { title, content, url, urlToImage, author, publishedAt } = article;
  useEffect(() => {
    contentData(url);
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={urlToImage || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
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
        <button
          onClick={onClose}
          className="block mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default NewsPreview;
