import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="">
        <h2 className="text-3xl">Not Found 404</h2>
        <Link to="/" className="text-teal-500 text-5xl">Go To Our Home Page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
