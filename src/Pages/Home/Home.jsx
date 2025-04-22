import React, { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import BestLawyer from "../../Components/BestLawyer/BestLawyer";
import { useLoaderData } from "react-router";
import LawServices from "../../Components/LawServices/LawServices";
const Home = () => {
  const allLawyers = useLoaderData();
  useEffect(() => {
    document.title = "LawServices | Home";
  }, []);
  return (
    <div>
      <Hero></Hero>
      <BestLawyer allLawyers={allLawyers}></BestLawyer>
      <LawServices></LawServices>
    </div>
  );
};

export default Home;
