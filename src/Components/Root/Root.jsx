import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import { RingLoader } from "react-spinners";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="mulish">
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      {navigation.state == "loading" ? (
        <RingLoader
          color="#0EA106"
          size={200}
          speedMultiplier={1}
          className="mx-auto"
        ></RingLoader>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
