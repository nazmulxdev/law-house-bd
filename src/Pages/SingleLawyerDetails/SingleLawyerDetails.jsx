import React from "react";
import { useLoaderData, useParams } from "react-router";

const SingleLawyerDetails = ({ params }) => {
  const allLawyersDetails = useLoaderData();
  const { license_no } = useParams(params);

  const lawyerDetail = allLawyersDetails.find(
    (lawyer) => lawyer.license_no === license_no
  );

  const {
    id,
    name,
    availability_days,
    image,
    expertise,
    years_of_experience,
    consultation_fee,
  } = lawyerDetail;
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto p-16 rounded-2xl bg-[#0F0F0F0D] mb-8 text-center">
        <h1 className=" text-3xl font-bold text-black pb-4">
          Lawyer’s Profile Details
        </h1>
        <p className="text-[#14141470] mt-4 text-xl font-medium mb-2">
          Remember, keeping an eye on how other law firms position their
          marketing can inspire you, help you understand where your competitors
          are positioned, and even help you find the new, unexplored territory
          in which your firm can stand out.
        </p>
      </div>

      <div className="">
        <div
          className="max-w-screen-2xl mx-auto p-8  bg-[#0F0F0F0D] mb-8 border-2 border-[#C4C4C4] rounded-2xl grid grid-cols-3
     items-center gap-16"
        >
          <div className="col-span-1 rounded-[0.75rem]">
            <img
              className="w-80 h-80 object-cover rounded-[0.75rem]"
              src={image}
              alt=""
            />
          </div>
          <div className="col-span-2  text-start">
            <div className="flex items-end gap-2 mb-2">
              <div className="bg-[#176AE510] rounded-full px-4 py-2">
                <p className="text-[#176AE5]">
                  {years_of_experience}+ years experience
                </p>
              </div>
            </div>
            <h1 className="font-bold text-2xl text-[#0F0F0F]  my-4">{name}</h1>
            <div className="flex items-center gap-10">
              <p className="font-medium text-lg text-[#0F0F0F70] ">
                {expertise}
              </p>
              <p className="font-medium text-lg text-[#0F0F0F70] ">
                ® License No: {license_no}
              </p>
            </div>

            <div className="flex items-center gap-4 my-4">
              <div className="text-lg font-semibold text-[#141414B3]">
                Availability
              </div>
              {availability_days.map((day, index) => (
                <div
                  key={index}
                  className="border-2 border-[#FFA00033] rounded-full px-4 py-2 text-[#FFA000] font-medium text-base text-center"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="space-x-4">
              <span className="text-lg font-semibold text-[#141414B3]">
                Consultation Fee:{" "}
              </span>
              <span className="text-lg font-semibold text-[#0EA106]">
                ${consultation_fee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLawyerDetails;
