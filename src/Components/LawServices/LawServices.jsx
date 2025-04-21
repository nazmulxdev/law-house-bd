import React from "react";

import lawyerImg from "../../assets/C002-assets/success-doctor.png";
import lawyerReviews from "../../assets/C002-assets/success-review.png";
import casesInitiated from "../../assets/C002-assets/success-patients.png";
import totalStuffsImg from "../../assets/C002-assets/success-staffs.png";
import CountUp from "react-countup";

const LawServices = () => {
  const { totalStuffs, totalReviews, totalLawyer, totalCasesInitiated } = {
    totalStuffs: 240,
    totalCasesInitiated: 2500,
    totalReviews: 320,
    totalLawyer: 199,
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-8 text-center">
      <h1 className="font-bold text-5xl text-[#0F0F0F]  mb-4">
        We Provide Best Law Services
      </h1>
      <p className="font-medium text-lg text-[#0F0F0F80] px-32 mb-8">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border-2 border-[#0F0F0F26] bg-[#0F0F0F0D] rounded-2xl px-12 py-10 text-start">
          <div className="mb-4">
            <img src={lawyerImg} alt="" />
          </div>
          <h1 className="font-bold text-5xl mb-3">
            <CountUp
              start={0}
              end={totalLawyer}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h1>
          <p className="font-medium text-xl text-[#0F0F0F80]">Total Lawyer</p>
        </div>
        <div className="border-2 border-[#0F0F0F26] bg-[#0F0F0F0D] rounded-2xl px-12 py-10 text-start">
          <div className="mb-4">
            <img src={lawyerReviews} alt="" />
          </div>
          <h1 className="font-bold text-5xl mb-3">
            <CountUp
              start={0}
              end={totalReviews}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h1>
          <p className="font-medium text-xl text-[#0F0F0F80]">Total Reviews</p>
        </div>
        <div className="border-2 border-[#0F0F0F26] bg-[#0F0F0F0D] rounded-2xl px-12 py-10 text-start">
          <div className="mb-4">
            <img src={casesInitiated} alt="" />
          </div>
          <h1 className="font-bold text-5xl mb-3">
            <CountUp
              start={0}
              end={totalCasesInitiated}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h1>
          <p className="font-medium text-xl text-[#0F0F0F80]">
            Cases Initiated
          </p>
        </div>
        <div className="border-2 border-[#0F0F0F26] bg-[#0F0F0F0D] rounded-2xl px-12 py-10 text-start">
          <div className="mb-4">
            <img src={totalStuffsImg} alt="" />
          </div>
          <h1 className="font-bold text-5xl mb-3">
            <CountUp
              start={0}
              end={totalStuffs}
              enableScrollSpy
              duration={4}
            ></CountUp>
            +
          </h1>
          <p className="font-medium text-xl text-[#0F0F0F80]">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default LawServices;
