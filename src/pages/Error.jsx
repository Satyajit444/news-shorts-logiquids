import React from "react";
import { Link } from "react-router-dom";
import style from "./main.module.css";
function Error() {
  return (
    <div className={style["error-ctn"]}>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={style["error-link"]}>
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
