import React from "react";
import CategoriesInner from "./Categories/CategoriesInner.js";
import Process from "./Process/Process.js";
import SearchBar from "../../Components/Header/SearchBar";
import HomeListingBtn from "../../Components/Header/HomeListingBtn";
import HeroImage from "../../Components/Header/HeroImage";
import LatestAds from "./LatestAds/LatestAds";

const Home = () => {
  return (
    <div className="Home">
      <HeroImage height="50" />
      <SearchBar />
      <HomeListingBtn />
      <CategoriesInner />
      <Process />
      <LatestAds />
    </div>
  );
};

export default Home;
