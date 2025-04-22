import { toast } from "react-toastify";

const showSuccess = () => {
  toast.success("🦄 Wow so easy!", {
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
  toast.warn("🦄 Wow so easy!", {
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

const addToStoredDB = (lawyerLicenseNo) => {
  const storedLawyersLicenseData = getStoredLawyer();
  if (storedLawyersLicenseData.includes(lawyerLicenseNo)) {
    showWarning();
    return false;
  } else {
    storedLawyersLicenseData.push(lawyerLicenseNo);
    const lawyersData = JSON.stringify(storedLawyersLicenseData);
    localStorage.setItem("bookingList", lawyersData);
    showSuccess();
    console.log(storedLawyersLicenseData);
    return true;
  }
};

export { addToStoredDB };
