import React from "react";
import { RingLoader } from "react-spinners";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="mulish">
      {/* loader */}
      {/* <RingLoader color="#0EA106" size={200} speedMultiplier={1}>
        <p>this is root.</p>
      </RingLoader> */}

      <NavBar></NavBar>
    </div>
  );
};

export default Root;
