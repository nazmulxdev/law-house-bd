import React from "react";
import { useNavigate } from "react-router";

const NotBooked = () => {
  const gotoHome = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto p-8 text-center">
      <h1 className="font-bold text-5xl text-[#0F0F0F] text-center  my-8">
        You Have not Booked any Appointment yet
      </h1>
      <p className="font-medium text-2xl text-[#0F0F0F80] px-32 mb-8">
        Our PLatform connects you with verified, experienced Lawyers across
        various specialties -all at your convenience.
      </p>
      <button
        onClick={() => gotoHome("/")}
        className="btn bg-blue-700 text-white rounded-lg mb-8"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default NotBooked;
