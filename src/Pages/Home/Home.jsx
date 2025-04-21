import React from "react";
import Hero from "../../Components/Hero/Hero";
import BestLawyer from "../../Components/BestLawyer/BestLawyer";
import { useLoaderData } from "react-router";
// import heroBackground from "../../assets/C002-assets/banner-img-1.png";

const Home = () => {
  const allLawyers = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <BestLawyer allLawyers={allLawyers}></BestLawyer>
    </div>
  );
};

export default Home;
