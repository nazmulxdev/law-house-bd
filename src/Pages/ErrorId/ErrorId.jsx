import React from "react";
import { useNavigate } from "react-router";

const ErrorId = () => {
  const returnHome = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <h1 className="font-bold text-5xl text-black mb-4 text-center mt-4">
        No Lawyer Found
      </h1>
      <p className="font-medium text-2xl text-[#0F0F0F80] px-32 mb-8 text-center mt-4">
        Oops! The Page you're looking for doesn't exist
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => returnHome("/")}
          className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-4 rounded-lg mt-4 mb-24 w-56 h-14 "
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorId;
