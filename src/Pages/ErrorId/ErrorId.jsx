import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router";

const ErrorId = () => {
  useEffect(() => {
    document.title = "LawServices | no Data Found";
  }, []);
  const { license_no } = useParams();
  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <h1 className="font-bold text-5xl text-black mb-8 text-center mt-4">
        No Lawyer Found
      </h1>
      <p className="font-medium text-2xl text-[#0F0F0F80] px-32 mb-4 text-center mt-4">
        No Lawyer Found with this License No -
      </p>
      <p className="font-medium text-2xl text-[#0F0F0F80] px-32 mb-8 text-center mt-4">
        {license_no}
      </p>
      <div className="flex items-center justify-center">
        <NavLink to="/">
          <button className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-4 rounded-lg mt-4 mb-24 w-56 h-14 ">
            Go Back Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorId;
