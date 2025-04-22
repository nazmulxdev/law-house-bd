import React from "react";
import CustomBarChart from "../CustomBarChart/CustomBarChart";
import BookedLawyersSection from "../BookedLawyersSection/BookedLawyersSection";

const BookedItems = ({ bookedLawyer }) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-8 text-center flex flex-col items-center justify-center">
      <CustomBarChart bookedLawyer={bookedLawyer}></CustomBarChart>
      <BookedLawyersSection bookedLawyer={bookedLawyer}></BookedLawyersSection>
    </div>
  );
};

export default BookedItems;
