import React, { use, useEffect, useState } from "react";
import NotBooked from "../NotBooked/NotBooked";
import BookedItems from "../BookedItems/BookedItems";

import { getStoredLawyer } from "../../Utilities/LocalStorage/localStorage";

const lawyersJsonData = fetch("lawyers_data.json").then((res) => res.json());

const MyBookings = () => {
  const lawyersMainData = use(lawyersJsonData);
  const [bookedLawyer, setBookedLawyer] = useState([]);
  useEffect(() => {
    const storedLawyersLicenseNo = getStoredLawyer();
    console.log(typeof storedLawyersLicenseNo[1]);
    const bookedLawyersItems = lawyersMainData.filter((lawyer) =>
      storedLawyersLicenseNo.includes(lawyer.license_no)
    );
    setBookedLawyer(bookedLawyersItems);
  }, []);
  console.log(lawyersMainData);
  return (
    <div>
      {bookedLawyer.length === 0 ? (
        <NotBooked></NotBooked>
      ) : (
        <BookedItems bookedLawyer={bookedLawyer}></BookedItems>
      )}
    </div>
  );
};

export default MyBookings;
