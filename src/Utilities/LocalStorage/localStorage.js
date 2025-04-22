import { data } from "react-router";
import { toast } from "react-toastify";

const showSuccess = (lawyerName) => {
  toast.success(`Appointment scheduled for ${lawyerName} successfully`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const showWarning = () => {
  toast.warn("Appointment already scheduled for today", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const showError = () => {
  toast.error("Appointment Canceled", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const getStoredLawyer = () => {
  const storedLawyersStr = localStorage.getItem("bookingList");
  if (storedLawyersStr) {
    const storedLawyersLicenseNo = JSON.parse(storedLawyersStr);
    return storedLawyersLicenseNo;
  } else {
    return [];
  }
};

const addToStoredDB = (lawyerLicenseNo, lawyerName) => {
  const storedLawyersLicenseData = getStoredLawyer();
  if (storedLawyersLicenseData.includes(lawyerLicenseNo)) {
    showWarning();
    return false;
  } else {
    storedLawyersLicenseData.push(lawyerLicenseNo);
    const lawyersData = JSON.stringify(storedLawyersLicenseData);
    localStorage.setItem("bookingList", lawyersData);
    showSuccess(lawyerName);
    return true;
  }
};

const removeStoredDB = (bookedLicenseNo) => {
  const storedLocalData = getStoredLawyer();
  console.log(storedLocalData);
  console.log(bookedLicenseNo);
  const filteredStoredData = storedLocalData.filter(
    (data) => data !== bookedLicenseNo
  );
  const remainingLawyer = JSON.stringify(filteredStoredData);
  localStorage.setItem("bookingList", remainingLawyer);
  showError();
};

export { addToStoredDB, getStoredLawyer, removeStoredDB };
