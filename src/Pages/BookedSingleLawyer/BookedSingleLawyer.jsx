import React from "react";
import { removeStoredDB } from "../../Utilities/LocalStorage/localStorage";

const BookedSingleLawyer = ({ lawyerBooked }) => {
  const { name, consultation_fee, expertise, license_no } = lawyerBooked;
  //   console.log(typeof license_no);
  //   const handleDeleteLawyer = (license) => {
  //     removeStoredDB(license);
  //   };
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto p-8 rounded-2xl border-2 border-[#C4C4C4] mb-8 text-center">
        <div className="border-b-2 border-dashed border-[#C4C4C4] text-lg font-bold text-black pb-4 flex items-center justify-between">
          <div className="text-start">
            <h1 className="font-bold text-xl mb-2">{name}</h1>
            <p className="font-medium text-lg text-[#0F0F0F80]">{expertise}</p>
          </div>
          <div className="font-medium text-lg text-[#0F0F0F80]">
            Appointment Fee : $ {consultation_fee}
          </div>
        </div>
        <div>
          <div className="px-4 mt-4">
            <button
              onClick={() => removeStoredDB(license_no)}
              className="btn bg-white border-red-300  text-red-500 font-medium text-xl mulish px-8 py-6 rounded-full  w-full mt-2"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedSingleLawyer;
