import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
