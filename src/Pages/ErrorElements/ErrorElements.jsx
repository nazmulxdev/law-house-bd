import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

import errorImage from "../../assets/C002-assets/soft-404-errors-and-seo.jpg";
import { useNavigate } from "react-router";

const ErrorElements = () => {
  const backHome = useNavigate();
  useEffect(() => {
    document.title = "404 -Page Not Found";
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-screen-2xl mx-auto p-8">
        <div>
          <img src={errorImage} alt="" />
        </div>
        <h1 className="font-bold text-5xl text-red-500  mb-4 text-center mt-4">
          404 - Page Not Found
        </h1>
        <p className="font-medium text-2xl text-[#0F0F0F80] px-32 mb-8 text-center mt-4">
          Oops! The Page you're looking for doesn't exist
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={() => backHome("/")}
            className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-4 rounded-lg mt-4 mb-24 w-56 h-14 "
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorElements;
