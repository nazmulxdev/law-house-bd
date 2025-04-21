import React from "react";
import { Link, NavLink } from "react-router";

const SingleLawyer = ({ singleLawyerData }) => {
  const { name, image, expertise, license_no, years_of_experience } =
    singleLawyerData;
  return (
    <div
      className="border-2 border-[#C4C4C4] rounded-2xl grid grid-cols-3
     items-center p-6 gap-16"
    >
      <div className="col-span-1 rounded-[0.75rem]">
        <img
          className="w-40 h-40 object-cover rounded-[0.75rem]"
          src={image}
          alt=""
        />
      </div>
      <div className="col-span-2  text-start">
        <div className="flex items-end gap-2 mb-2">
          <div className="bg-[#09982F10] rounded-full px-4 py-2">
            <p className="text-[#09982F]">Available</p>
          </div>
          <div className="bg-[#176AE510] rounded-full px-4 py-2">
            <p className="text-[#176AE5]">
              {years_of_experience}+ years experience
            </p>
          </div>
        </div>
        <h1 className="font-bold text-2xl text-[#0F0F0F] ">{name}</h1>
        <p className="font-medium text-lg text-[#0F0F0F70] ">{expertise}</p>
        <p className="font-medium text-lg text-[#0F0F0F70] ">
          ® License No: {license_no}
        </p>
        <NavLink to={`/lawyer/${license_no}`}>
          <button className="btn bg-white border-2 border-[#176AE520] rounded-full w-full text-[#176AE5] font-bold text-base mt-4 hover:text-white hover:bg-[#176AE5]">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SingleLawyer;
