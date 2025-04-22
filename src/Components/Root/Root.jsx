import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
// import DynamicTitle from "../DaynamicTitle/DaynamicTitle";

const Root = () => {
  return (
    <div className="mulish">
      {/* <DynamicTitle></DynamicTitle> */}
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
