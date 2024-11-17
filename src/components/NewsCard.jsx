import React from "react";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="max-w-4xl mx-auto mb-6 bg-white rounded-lg shadow-md overflow-hidden border md:flex">
      {/* Image Section */}
      <div className="relative h-48 md:h-auto md:w-1/3">
        <img
          src={urlToImage || "https://via.placeholder.com/150"} // Fallback image
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:w-2/3">
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        {/* Meta Information */}
        <p className="text-xs text-gray-500 mt-2">
          short by Shalini Ojha / 11:28 am on Sunday 17 November, 2024
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">
          {description}
        </p>

        {/* Read More */}
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
