import React from "react";

const Hero = () => {
  return (
    <div className="hero heroBackground max-w-screen-2xl mx-auto mb-24 p-8 bg-linear-to-b from-[#0F0F0F] to-[#0F0F0F] rounded-3xl">
      <div className="hero-content text-neutral-content text-center">
        <div className="px-4 mt-4 md:mt-8 py-4 md:py-8 md:px-8 lg:px-44 lg:py-22 lg:mt-20 ">
          <h1 className="mb-5 text-5xl font-bold">
            It avoids subjective claims or <br /> exaggeration that might raise
            red <br /> flags legally
          </h1>
          <p className="text-lg font-medium text-[#FFFFFF]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
