import React from "react";
import CategoriesInner from "./Categories/CategoriesInner.js";
import Process from "./Process/Process.js";
import Header from "./Header/Header";
import LatestAds from "./LatestAds/LatestAds";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CategoriesInner />
      <Process />
      <LatestAds />
    </div>
  );
};

export default Home;
