import React from "react";
import BookedSingleLawyer from "../BookedSingleLawyer/BookedSingleLawyer";

const BookedLawyersSection = ({ bookedLawyer }) => {
  //   console.log(bookedLawyer);
  return (
    <div className=" text-center">
      <div>
        <h1 className="font-bold text-5xl text-[#0F0F0F]  mb-4">
          My Today Appointments
        </h1>
        <p className="font-medium text-lg text-[#0F0F0F80] px-32 mb-8">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>

      <div>
        {bookedLawyer.map((lawyerBooked, index) => (
          <BookedSingleLawyer
            key={index}
            lawyerBooked={lawyerBooked}
          ></BookedSingleLawyer>
        ))}
      </div>
    </div>
  );
};

export default BookedLawyersSection;
