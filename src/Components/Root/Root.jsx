import React from "react";
import { RingLoader } from "react-spinners";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="mulish">
      {/* loader */}
      {/* <RingLoader color="#0EA106" size={200} speedMultiplier={1}>
        <p>this is root.</p>
      </RingLoader> */}
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
