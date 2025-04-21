import React from 'react';

const Hero = () => {
    return (
        <div className="hero heroBackground max-w-screen-2xl mx-auto mb-24 p-8 bg-linear-to-b from-[#0F0F0F] to-[#0F0F0F] rounded-3xl">
        <div className="hero-content text-neutral-content text-center">
          <div className="px-44 py-22 mt-20">
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