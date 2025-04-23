import React, { use, useEffect, useState } from "react";
import SingleLawyer from "../SingleLawyer/SingleLawyer";

const allLawyersArray = fetch("/lawyers_data.json").then((res) => res.json());

const BestLawyer = () => {
  const arrayOfAllLawyers = use(allLawyersArray);
  const [displayAllLawyers, setAllLawyers] = useState([]);
  const [showAllLawyers, setShowAllLawyers] = useState(false);
  useEffect(() => {
    if (showAllLawyers) {
      setAllLawyers(arrayOfAllLawyers);
    } else {
      setAllLawyers(arrayOfAllLawyers.slice(0, 6));
    }
  }, [arrayOfAllLawyers, showAllLawyers]);

  return (
    <div className="max-w-screen-2xl mx-auto p-8 text-center">
      <h1 className="font-bold text-5xl text-[#0F0F0F]  mb-4">
        Our Best Lawyers
      </h1>
      <p className="font-medium text-lg text-[#0F0F0F80] px-32 mb-8">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.isArray(displayAllLawyers) &&
          displayAllLawyers.map((singleLawyerData) => (
            <SingleLawyer
              key={singleLawyerData.id}
              singleLawyerData={singleLawyerData}
            ></SingleLawyer>
          ))}
      </div>
      <button
        onClick={() => {
          setShowAllLawyers((previousValue) => !previousValue);
          if (showAllLawyers) window.scroll(0, 0);
        }}
        className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-4 rounded-full mt-8 mb-24 w-56 h-14"
      >
        {showAllLawyers ? "Show Less Lawyer" : "Show All Lawyer"}
      </button>
    </div>
  );
};

export default BestLawyer;
