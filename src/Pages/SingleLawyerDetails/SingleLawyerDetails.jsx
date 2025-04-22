import React, { use, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { PiWarningOctagonDuotone } from "react-icons/pi";
import { addToStoredDB } from "../../Utilities/LocalStorage/localStorage";

const allLawyersDataArray = fetch("lawyers_data.json").then((res) =>
  res.json()
);

const SingleLawyerDetails = ({ params }) => {
  const location = useLocation();
  const navigateRoute = useNavigate();
  const lawyersAllData = use(allLawyersDataArray);
  // const allLawyersDetails = useLoaderData();
  const { license_no } = useParams(params);

  const lawyerDetail = lawyersAllData.find(
    (lawyer) => lawyer.license_no === license_no
  );
  console.log(location);
  console.log(location.pathname.split("/")[3]);
  const {
    name,
    availability_days,
    image,
    expertise,
    years_of_experience,
    consultation_fee,
  } = lawyerDetail;

  const daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = daysName[new Date().getDay()];

  const isAvailableToday = availability_days.includes(today);

  const handleBookLawyers = (lawyerLicense, name) => {
    const dataIsAdded = addToStoredDB(lawyerLicense, name);
    if (!dataIsAdded) {
      return;
    }
    navigateRoute("/my-booking");
  };
  useEffect(() => {
    document.title = `LawServices | ${name}`;
  }, []);
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto p-16 rounded-2xl bg-[#0F0F0F0D] mb-8 text-center border-2 border-[#C4C4C4]">
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
          className="max-w-screen-2xl mx-auto p-8 mb-8 border-2 border-[#C4C4C4] rounded-2xl grid grid-cols-3
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

      <div className="max-w-screen-2xl mx-auto p-8 rounded-2xl border-2 border-[#C4C4C4] mb-8 text-center">
        <h1 className="border-b-2 border-dashed border-[#C4C4C4] text-3xl font-bold text-black pb-4">
          Book an Appointment
        </h1>
        <div className="border-b-2 border-dashed border-[#0F0F0F26] flex items-center justify-between">
          <p className="text-[#141414] mt-4 text-xl font-semibold mb-2">
            Availability
          </p>
          <div className="text-[#141414] mt-4 text-xl font-semibold mb-2">
            {isAvailableToday ? (
              <div className="bg-[#09982F10] rounded-full px-4 py-2">
                <p className="text-[#09982F]">Lawyer Available Today</p>
              </div>
            ) : (
              <div className="bg-[#FFA00033] rounded-full px-4 py-2">
                <p className="text-[#FFA000]">Lawyer not Available Today</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="bg-[#FFA00033] rounded-full px-4 py-4 flex items-center gap-4 justify-center mt-8 mb-4">
            <PiWarningOctagonDuotone className="text-[#FFA000] font-medium text-lg" />
            <p className="text-[#FFA000] font-medium text-lg">
              Lawyer not Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>
          <div className="px-4">
            <button
              onClick={() => {
                handleBookLawyers(license_no, name);
              }}
              className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-8 rounded-full  w-full"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLawyerDetails;
