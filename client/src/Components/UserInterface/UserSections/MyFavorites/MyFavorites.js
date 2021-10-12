import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss";

const MyAds = () => {
  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">Favorites</main>
      </div>
    </section>
  );
};

export default MyAds;
