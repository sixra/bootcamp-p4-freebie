import React from "react";
import CategoriesInner from "./Categories/CategoriesInner.js";
import Process from "./Process/Process.js";
import SearchBar from "../../Components/Header/SearchBar";
import HomeListingBtn from "../../Components/Header/HomeListingBtn";
import LatestAds from "./LatestAds/LatestAds";

const Home = () => {
  return (
    <div className="Home">
      <SearchBar />
      <HomeListingBtn />
      <CategoriesInner />
      <Process />
      <LatestAds />
    </div>
  );
};

export default Home;
